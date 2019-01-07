import formatErrors from '../../error/formatErrors'
import { tryLogin } from '../../auth'

export default {
  Query: {
    getUser: (parent, { id }, { models }) =>
      models.user.findOne({ where: { id } }),
    allUsers: (parent, args, { models }) => models.user.findAll({})
  },
  Mutation: {
    login: (parent, { email, password }, { models, SECRET_1, SECRET_2 }) =>
      tryLogin(email, password, models, SECRET_1, SECRET_2),
    register: async (parent, args, { models }) => {
      try {
        const user = await models.user.create(args)

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
