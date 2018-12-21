import bcrypt from 'bcrypt'
import formatErrors from '../../error/formatErrors'

export default {
  Query: {
    getUser: (parent, { id }, { models }) =>
      models.user.findOne({ where: { id } }),
    allUsers: (parent, args, { models }) => models.user.findAll({})
  },
  Mutation: {
    register: async (parent, { password, ...restArgs }, { models }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await models.user.create({
          ...restArgs,
          password: hashedPassword
        })

        return {
          ok: true,
          user
        }
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models)
        }
      }
    }
  }
}
