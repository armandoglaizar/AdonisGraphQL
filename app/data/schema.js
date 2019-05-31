'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
  type Survey {
    id: Int!
    name: String!
    description: String!
    questions: String!
  }

  type Query {
    readSurveys: [Survey]
    readSurvey(id: Int!): Survey
  }

  type Mutation {
    createSurvey(name: String!, description: String!, questions: String!): Survey
    deleteSurvey(id: Int!): Survey
    updateSurvey(id: Int!, name: String!, description: String!, questions: String!): Survey
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })