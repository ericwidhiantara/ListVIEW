import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class Listview extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ padding: 4, fontSize: 22, color: 'blue', textAlign: 'center' }} >
           {'\n'}
            List View Nama nama buah
      </Text>
        <SectionList
          sections={[
            {title: 'A', data: ['Apple','Avocado']},
            {title: 'B', data: ['Banana', 'Blueberry']},
            {title: 'C', data: ['Cherry', 'Coconut']},
            {title: 'D', data: ['Durian', 'Dragon Fruit']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Text style={{ padding: 4, fontSize: 22, color: 'blue', textAlign: 'center' }} >
           {'\n'}
            Eric Widhi Antara
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Listview);
