const graphql = require('graphql')

const {
  GraphQLEnumType
} = graphql

const PriorityType = new GraphQLEnumType({
  name: 'PriorityType',
  values: {
    STANDARD: { value: 'standard' },
    URGENT: { value: 'urgent' }
  }
})

module.exports = PriorityType
