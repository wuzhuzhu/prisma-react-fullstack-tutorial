const { GraphQLServer } = require('graphql-yoga')
import resolvers from './resolvers'
import { Prisma } from "./generated/prisma";

export const dbBinding = new Prisma({
  endpoint: 'http://localhost:4466/blog/dev', // the endpoint of the Prisma DB service (value is set in .env)
  secret: 'mysecret123', // taken from database/prisma.yml (value is set in .env)
  debug: true, // log all GraphQL queries & mutations
})

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: dbBinding,
  }),
})

server.start(() => console.log(`The server is running on http://localhost:4000`))