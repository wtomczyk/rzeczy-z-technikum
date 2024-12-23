import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color:props.color,
        flex:props.flex,
        text:props.text,
        fontcolor:props.fontcolor
    };
    this.onPress = this.onPress.bind(this);
    console.log("Comp")
    
  }
  onPress = () => {
      alert(this.state.color)
    }
  render() {
    var a = this.state.flex
    var b = this.state.color
    return (
    <TouchableOpacity onPress={this.onPress} style={{flex:a,backgroundColor:b}}>
        <View >
          <Text style={styles(this.props).text}> {this.state.text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = (props)=>StyleSheet.create({
  text: { fontSize: 48, textAlign: "center", color:props.fontcolor }
});

export default Comp;