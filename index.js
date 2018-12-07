import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema'
import resolvers from './resolvers'

const PORT = 5000

const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })

app.listen(PORT, () =>
  //eslint-disable-next-line
  console.log(
    `🚀  Server is listening at http://localhost:${PORT}${server.graphqlPath}`
  )
)
