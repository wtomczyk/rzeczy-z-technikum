import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

export default class App extends React.Component {
  render() {
    var a ="a"
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container}>     
        <Header anyprop={a}/>
        <Content />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',   
  }, 
 
});