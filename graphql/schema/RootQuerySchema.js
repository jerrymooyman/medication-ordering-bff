const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql
const { api } = require('../config.json')
const apiUrl = `${api.host}:${api.port}`
const axios = require('axios')

const MedicationOrderType = require('../types/medicationOrderType')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    medicationOrders: {
      type: new GraphQLList(MedicationOrderType),
      resolve (parentValue, args) {
        return axios.get(`${apiUrl}/medicationOrders`)
          .then(res => res.data)
      }
    },
    medicationOrder: {
      type: MedicationOrderType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve (parentValue, args) {
        return axios.get(`${apiUrl}/medicationOrders/${args.id}`)
          .then(res => res.data)
      }
    }
  })
})

module.exports = RootQuery

// const RootMutation = new GraphQLObjectType({
//   name: 'RootMutationType',
//   fields: {
//     updateWorkOrderStatus: {
//       type: WorkOrderType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLInt) },
//         status: { type: new GraphQLNonNull(GraphQLString) }
//       },
//       resolve(parentValue, { id, status }) {
//         return axios.patch(`${apiUrl}/workorders/${id}`, { status })
//           .then(res => res.data)
//       }
//     }
//   }
// })
