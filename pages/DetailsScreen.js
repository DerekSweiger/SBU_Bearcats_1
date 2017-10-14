/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the DetailsScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
