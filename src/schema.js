import { mergeTypes } from 'merge-graphql-schemas'

const ctx = require.context('.', true, /\.graphql$/)

export default mergeTypes(ctx.keys().map(ctx))
