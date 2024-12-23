import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color:props.color,
        flex:props.flex,
        text:props.text
    };
    console.log("Content")
  }

  render() {
    var a = this.state.flex
    var b = this.state.color
    return (
      <View style={{flex:a,backgroundColor:b}}>
        <Text style={styles.text}> Content </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 48, }
});

export default Content;