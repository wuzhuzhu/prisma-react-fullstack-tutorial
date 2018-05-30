import gql from "graphql-tag";

export const POST_QUERY = gql`
  query PostQuery {
    posts {
      id
      title
      content
      published
      user {
        id
        name
      }
    }
  }
`

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;