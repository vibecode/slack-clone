import formatErrors from '../../error/formatErrors'
import requiresAuth from '../../permissions'

export default {
  Mutation: {
    createTeam: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        try {
          await models.team.create({ ...args, owner: user.id })
          return {
            ok: true
          }
        } catch (err) {
          console.log(err)

          return {
            ok: false,
            errors: formatErrors(err)
          }
        }
      }
    )
  }
}
