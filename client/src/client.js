import ApolloClient from 'apollo-boost'
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://192.168.0.225:4000"
})

client
  .query({
    query: gql`
      {
        description
      }
    `
  })
  .then(res => {
    console.log(res.data.description)
  })

export default client