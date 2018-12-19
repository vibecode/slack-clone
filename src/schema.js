import { mergeTypes } from 'merge-graphql-schemas'

const baseSchema = `
  schema {
    query: Query
  }
`

const ctx = require.context('.', true, /\.graphql$/)
const schema = ctx
  .keys()
  .map(ctx)
  .concat(baseSchema)

export default mergeTypes(schema)
