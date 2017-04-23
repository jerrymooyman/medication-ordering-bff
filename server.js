const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./graphql/schema')

const app = express()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200)
  }
  else {
    next()
  }
})
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
