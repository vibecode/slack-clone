import { mergeTypes } from 'merge-graphql-schemas'

const ctx = require.context('.', true, /\.graphql$/)
const schema = ctx.keys().map(ctx)

export default mergeTypes(schema)
