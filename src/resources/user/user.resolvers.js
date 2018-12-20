import bcrypt from 'bcrypt'

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
        return await models.user.create({
          ...restArgs,
          password: hashedPassword
        })
      } catch (err) {
        console.error(err)
        return false
      }
    }
  }
}
