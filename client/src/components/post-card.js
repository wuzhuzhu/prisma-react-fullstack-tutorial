import React from 'react'
import {
  Text,
  Card, CardItem,
  SwipeRow,
  Button,
} from 'native-base'
import { get } from 'lodash'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { filter } from 'lodash'

import { DELETE_POST, POST_QUERY } from "../graphqls";

const SwipablePostCard = ({ post }) => (
  <Mutation
    mutation={DELETE_POST}
    update={(cache, { data: { deletePost } }) => {
      const { posts } = cache.readQuery({ query: POST_QUERY });
      cache.writeQuery({
        query: POST_QUERY,
        data: { posts: filter(posts, p => p.id !== post.id) }
      });
    }}
  >
    {(deletePost, { data }) => (
      <SwipeRow
        rightOpenValue={-75}
        right={<Button danger onPress={() => deletePost({
          variables: { id: post.id }
        })}><Text>删除</Text></Button>}
        body={<PostCard post={post} />}
      />
    )}
  </Mutation>
)

const PostCard =  ({ post }) => <Card>
  <CardItem header>
    <Text>{post.title}</Text>
  </CardItem>
  <CardItem>
    <Text>{post.content}</Text>
  </CardItem>
  <CardItem footer>
    <Text>{get(post, 'user.name', '无名氏')}</Text>
  </CardItem>
</Card>

export default SwipablePostCard