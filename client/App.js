import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from "native-base";
import { ApolloProvider } from 'react-apollo'

import RootRoute from './src'
import apolloClient from './src/client'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <ApolloProvider client={apolloClient}>
          <RootRoute />
        </ApolloProvider>
      </Root>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
