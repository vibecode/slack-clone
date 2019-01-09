import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'

export const createTokens = async (user, secretOne, secretTwo) => {
  const createToken = jwt.sign(
    {
      user: _.pick(user, ['id'])
    },
    secretOne,
    {
      expiresIn: '1h'
    }
  )

  const createRefreshToken = jwt.sign(
    {
      user: _.pick(user, 'id')
    },
    secretTwo,
    {
      expiresIn: '7d'
    }
  )

  return [createToken, createRefreshToken]
}

export const refreshTokens = async (
  token,
  refreshToken,
  models,
  secretOne,
  secretTwo
) => {
  let userId = 0

  try {
    const {
      user: { id }
    } = jwt.decode(refreshToken)
    userId = id
  } catch (err) {
    return {}
  }

  if (!userId) {
    return {}
  }

  const user = await models.user.findOne({ where: { id: userId }, raw: true })

  if (!user) {
    return {}
  }

  const refreshSecret = user.password + secretTwo

  try {
    jwt.verify(refreshToken, refreshSecret)
  } catch (err) {
    return {}
  }

  const [newToken, newRefreshToken] = await createTokens(
    user,
    secretOne,
    refreshSecret
  )
  return {
    token: newToken,
    refreshToken: newRefreshToken,
    user
  }
}

export const tryLogin = async (
  email,
  password,
  models,
  secretOne,
  secretTwo
) => {
  const user = await models.user.findOne({ where: { email }, raw: true })
  if (!user) {
    // user with provided email not found
    return {
      ok: false,
      errors: [{ path: 'email', message: 'Wrong email' }]
    }
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    // bad password
    return {
      ok: false,
      errors: [{ path: 'password', message: 'Wrong password' }]
    }
  }

  //the token will automatically expire if the password changes
  const refreshTokenSecret = user.password + secretTwo

  const [token, refreshToken] = await createTokens(
    user,
    secretOne,
    refreshTokenSecret
  )

  return {
    ok: true,
    token,
    refreshToken
  }
}
