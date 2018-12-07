import { gql } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = gql`
  type Query {
    hi: String
  }
`
const resolvers = {
  Query: {
    hi: (parent, args, context, info) => 'hi'
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
