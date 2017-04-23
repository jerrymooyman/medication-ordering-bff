const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = graphql

const MedicationType = new GraphQLObjectType({
  name: 'MedicationType',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genericName: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: GraphQLString }
  })
})

module.exports = MedicationType
