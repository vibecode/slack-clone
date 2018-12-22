import bcrypt from 'bcrypt'
import formatErrors from '../../error/formatErrors'

export default {
  Query: {
    getUser: (parent, { id }, { models }) =>
      models.user.findOne({ where: { id } }),
    allUsers: (parent, args, { models }) => models.user.findAll({})
  },
  Mutation: {
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
