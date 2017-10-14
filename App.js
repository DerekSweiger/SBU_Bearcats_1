import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import {HomeScreen} from './pages/HomeScreen.js';
import {DetailsScreen} from './pages/DetailsScreen.js';

const AppDriver = StackNavigator({
  Home:  { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

export default class App extends React.Component {
  render() {
    return <AppDriver />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
