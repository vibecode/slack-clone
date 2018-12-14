import { mergeResolvers } from 'merge-graphql-schemas'

const ctx = require.context('.', true, /\.resolvers\.js$/)

export default mergeResolvers(ctx.keys().map(key => ctx(key).default))
