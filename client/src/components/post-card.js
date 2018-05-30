import React from 'react'
import {
  Text,
  Card, CardItem,
  SwipeRow,
  Button,
} from 'native-base'
import { get } from 'lodash'

const SwipablePostCard = ({ post }) => (
  <SwipeRow
    rightOpenValue={-75}
    right={<Button danger onPress={() => console.log('删除帖子', post.id)}><Text>删除</Text></Button>}
    body={<PostCard post={post} />}
  />
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