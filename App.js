import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Sales from './src/MainApp';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Sales/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#E8EAF6'
  }
})