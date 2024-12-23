import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color:props.color,
        flex:props.flex,
        text:props.text,
        fontcolor:props.fontcolor
    };
    console.log("Comp")
  }

  render() {
    var a = this.state.flex
    var b = this.state.color
    return (
      <View style={{flex:a,backgroundColor:b}}>
        <Text style={styles(this.props).text}> {this.state.text} </Text>
      </View>
    );
  }
}

const styles = (props)=>StyleSheet.create({
  text: { fontSize: 48, textAlign: "center", color:props.fontcolor }
});

export default Comp;