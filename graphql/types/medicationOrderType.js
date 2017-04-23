const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = graphql
const MedicationType = require('./MedicationType')
const PatientType = require('./PatientType')
const StaffType = require('./StaffType')
const PriorityType = require('./PriorityType')

const { api } = require('../config.json')
const apiUrl = `${api.host}:${api.port}`
const axios = require('axios')

const MedicationOrderType = new GraphQLObjectType({
  name: 'MedicationOrder',
  fields: () =>({
    id: { type: new GraphQLNonNull(GraphQLID) },
    medication: {
      type: new GraphQLNonNull(MedicationType),
      resolve (parentValue, args) {
        return axios.get(`${apiUrl}/medications/${parentValue.medicationId}`)
          .then(res => res.data)
      }
    },
    patient: {
      type: new GraphQLNonNull(PatientType),
      resolve (parentValue, args) {
        return axios.get(`${apiUrl}/patients/${parentValue.patientId}`)
          .then(res => res.data)
      }
    },
    dose: { type: new GraphQLNonNull(GraphQLString) },
    requestedBy: {
      type: new GraphQLNonNull(StaffType),
      resolve (parentValue, args) {
        return axios.get(`${apiUrl}/staff/${parentValue.requestedById}`)
          .then(res => res.data)
      }
    },
    priority: { type: PriorityType },
    requiredByTime: { type: GraphQLString }
  })
})

module.exports = MedicationOrderType
