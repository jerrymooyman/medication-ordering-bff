const graphql = require('graphql')
const {
  GraphQLEnumType
} = graphql

const StaffRoleType = new GraphQLEnumType({
  name: 'StaffRole',
  values: {
    NURSE: { value: 'nurse' },
    DOCTOR: { value: 'doctor' }
  }
})

module.exports = StaffRoleType
