import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from "native-base";
import RootRoute from './src'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <RootRoute />
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
