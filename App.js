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
<<<<<<< HEAD
    return <AppDriver />;
=======
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>This was added by Gunnar</Text>
      </View>
    );
>>>>>>> c281e8699f57922c3c0796dc11b5cd6c25a764fd
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
