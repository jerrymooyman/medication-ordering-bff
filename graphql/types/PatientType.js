const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = graphql

const PatientType = new GraphQLObjectType({
  name: 'Patient',
  fields: () =>({
    id: { type: new GraphQLNonNull(GraphQLID) },
    age: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    gender: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString }
  })
})

module.exports = PatientType
