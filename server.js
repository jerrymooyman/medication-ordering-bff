const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./graphql/schema')

const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}))
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
