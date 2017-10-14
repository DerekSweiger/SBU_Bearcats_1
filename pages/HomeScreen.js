/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the Homescreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
