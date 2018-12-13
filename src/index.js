import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './schema'
import models from './models'

const PORT = 5000

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

models.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    //eslint-disable-next-line
    console.log(
      `🚀  Server is listening at http://localhost:${PORT}${server.graphqlPath}`
    )
  )
})
