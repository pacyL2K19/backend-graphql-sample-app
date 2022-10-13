import { gql } from "apollo-server";

const typeDefs = gql`
  input RecordInput {
    country: String!
    year: String!
    totalPopulation: Int!
    area: Int!
  }

  input UpdateRecordInput {
    country: String
    year: String
    totalPopulation: Int
    area: Int
  }

  type Query {
    getAllRecords(limit: Int, skip: Int): [Record]
    getRecordById(id: ID!): Record
    getRecordCount: Int
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
    updateRecord(id: ID, data: UpdateRecordInput): Record
    # delete record and return a boolean, true if deleted
    deleteRecord(id: ID): Boolean
  }
`;

export default typeDefs;
