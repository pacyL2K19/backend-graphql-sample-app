// index.js

import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";

import { PrismaClient } from "@prisma/client";
import resolvers from "./resolvers/index.js";

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
