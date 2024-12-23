import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from "./components/Header2"
import Content from "./components/Content2"
import Footer from "./components/Footer2"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color:["red","lightgreen","blue"],
            flex:[1,6,1],
            text:["Header","Content","Footer"]
        };
        console.log("App")
    }
  render() {
    var a ="a"
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container}>     
        <Header color={this.state.color[0]} flex={this.state.flex[0]} text={this.state.text[0]}/>
        <Content color={this.state.color[1]} flex={this.state.flex[1]} text={this.state.text[1]}/>
        <Footer color={this.state.color[2]} flex={this.state.flex[2]} text={this.state.text[2]}/>
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