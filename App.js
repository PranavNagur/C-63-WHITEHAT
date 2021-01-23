import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
        backgroundColor= {'#9c8210'}
        centerComponent= {{text: 'monkeychunky',style:{color: '#fff980',fontSize: 20}}}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  }
});
