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
