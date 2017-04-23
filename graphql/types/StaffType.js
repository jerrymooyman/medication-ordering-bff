const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = graphql

const StaffRoleType = require('./StaffRoleType')

const StaffType = new GraphQLObjectType({
  name: 'Staff',
  fields: () =>({
    id: { type: new GraphQLNonNull(GraphQLID) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    gender: { type: GraphQLString },
    role: { type: StaffRoleType },
    email: { type: GraphQLString },
    phone: { type: GraphQLString }
  })
})

module.exports = StaffType
