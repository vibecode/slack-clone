import formatErrors from '../../error/formatErrors'
import requiresAuth from '../../permissions'

export default {
  Query: {
    allTeams: requiresAuth.createResolver(
      async (parent, args, { models, user }) =>
        models.team.findAll({ owner: user.id }, { raw: true })
    )
  },
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
