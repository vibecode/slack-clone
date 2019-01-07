import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema'
import resolvers from './resolvers'
import models from './models'
import config from './config'

const { SECRET_1, SECRET_2, PORT } = config

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    user: {
      id: 1
    },
    SECRET_1,
    SECRET_2
  }
})

const app = express()

server.applyMiddleware({ app })

models.sequelize.sync(/* { force: true } */).then(() => {
  app.listen(PORT, () =>
    //eslint-disable-next-line
    console.log(
      `🚀  Server is listening at http://localhost:${PORT}${server.graphqlPath}`
    )
  )
})
