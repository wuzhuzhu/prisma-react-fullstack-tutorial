const { GraphQLServer } = require('graphql-yoga')
import {Prisma} from './generated/prisma'

const resolvers = {
  Query: {
    description: () => `这是一个基于graphql的简单的博客应用`
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))