import formatErrors from '../../error/formatErrors'
import requiresAuth from '../../permissions'

export default {
  Query: {
    allTeams: requiresAuth.createResolver(
      async (parent, args, { models, user }) =>
        models.team.findAll({ where: { owner: user.id } }, { raw: true })
    )
  },
  Mutation: {
    createTeam: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        try {
          const team = await models.team.create({ ...args, owner: user.id })

          await models.channel.create({
            name: 'general',
            public: true,
            teamId: team.id
          })
          return {
            ok: true,
            team
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
  },
  Team: {
    channels: ({ id }, args, { models }) =>
      models.channel.findAll({ where: { teamId: id } })
  }
}
