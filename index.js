import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'

const PORT = 5000

const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })

app.listen(PORT, () =>
  //eslint-disable-next-line
  console.log(
    `🚀  Server is listening at http://localhost:${PORT}${server.graphqlPath}`
  )
)
