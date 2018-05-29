import React from 'react'
import {
  Container,
  Header, Left, Body, Right,
  Content,
  Footer, FooterTab, Button, Icon,
  Title,
  Text
} from 'native-base'

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
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
      <Text>每一个帖子的内容</Text>
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