import { gql } from "apollo-server";

const typeDefs = gql`
  input RecordInput {
    country: String!
    year: String!
    totalPopulation: Int!
    area: Int!
  }

  type Query {
    getAllRecords: [Record]
    # getRecordById(id: ID!): Record
  }

  type Record {
    id: ID!
    country: String!
    year: String!
    totalPopulation: Int!
    area: Int!
  }

  type Mutation {
    addRecord(data: RecordInput!): Record
    # update record and return updated record
    # updateRecord(id: ID, data: RecordInput): Record
    # delete record and return a boolean, true if deleted
    # deleteRecord(id: ID): Boolean
  }
`;

export default typeDefs;
