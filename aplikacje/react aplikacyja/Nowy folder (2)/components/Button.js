import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color:props.color,
        flex:props.flex,
        text:props.text
    };
    this.onPress = this.onPress.bind(this);
  }
  onPress = () => {
      //alert(this.state.color)
      //console.log(this.props)
      this.props.funkcja(this.state.text)
    }
  render() {
    var a = this.state.flex
    var b = this.state.color
    return (
    <TouchableOpacity onPress={this.onPress} style={{flex:a,backgroundColor:b}}>
        <View>
          <Text style={styles(this.props).text}> {this.state.text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = (props)=>StyleSheet.create({
  text: { fontSize: 48, textAlign: "center", color:"white" }
});

export default Button;