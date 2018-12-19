export default {
  Mutation: {
    createMessage: async (parent, args, { models, user }) => {
      try {
        await models.message.create({
          ...args,
          userId: user.id
        })
        return true
      } catch (err) {
        return false
      }
    }
  }
}
