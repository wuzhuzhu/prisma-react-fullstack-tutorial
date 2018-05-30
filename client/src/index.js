import React from 'react'
import {
  Container,
  Header, Left, Body, Right,
  Content,
  Footer, FooterTab, Button, Icon,
  Card, CardItem,
  Title,
  Text
} from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { isEmpty, map } from 'lodash'

import PostCard from './components/post-card'
import { POST_QUERY } from './graphqls'

function App() {
  return <Container>
    <Header>
      <Left></Left>
      <Body>
        <Title>简单的Blog</Title>
      </Body>
      <Right></Right>
    </Header>
    <Content padder>
      <Query query={POST_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          if (data && !isEmpty(data.posts)) {
            return map(data.posts, post => <PostCard key={post.id} post={post} />)
          } else return <Text>还没有帖子哦</Text>
        }}
      </Query>
    </Content>
    <Footer>
      <FooterTab>
        <Button active>
          <Icon active name="apps" />
        </Button>
        <Button>
          <Icon name="bulb" />
        </Button>
        <Button>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  </Container>
}

export default App