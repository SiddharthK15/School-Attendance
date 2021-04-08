import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>The Attendance</Text>
        <Text style={styles.text2}>App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 40,
    backgroundColor: 'yellow',
    color: 'red',
    fontWeight: 'bold',
    width: 300,
  },
  text2: {
    alignSelf: 'center',
    fontSize: 40,
    backgroundColor: 'yellow',
    color: 'red',
    fontWeight: 'bold',
    width: 80,
  },
});
