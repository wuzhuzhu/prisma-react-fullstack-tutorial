const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  description: String
}
`

const resolvers = {
  Query: {
    description: () => `这是一个基于graphql的简单的博客应用`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log(`The server is running on http://localhost:4000`))