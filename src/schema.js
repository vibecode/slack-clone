import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    hi: String
  }
`
export const resolvers = {
  Query: {
    hi: (parent, args, context, info) => 'hi'
  }
}
