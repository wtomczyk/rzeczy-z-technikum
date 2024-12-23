import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color:props.color,
        flex:props.flex,
        text:props.text
    };
    console.log("Header")
  }

  render() {
    var a = this.state.flex
    var b = this.state.color
    return (
      <View style={{flex:a,backgroundColor:b}}>
        <Text style={styles.text}> {this.state.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 48, }
});

export default Header;