const graphql = require('graphql')
const RootQuery = require('./schema/RootQuerySchema')

const {
  GraphQLSchema
} = graphql

module.exports = new GraphQLSchema({
  query: RootQuery
})
