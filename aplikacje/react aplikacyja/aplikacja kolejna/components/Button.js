import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <TouchableOpacity onPress={this.props.onPress} style={styles().text}>
        <View>
            <Text style={styles().text}> {this.props.title} </Text>
        </View>
    </TouchableOpacity>
    );
  }
}


const styles = (props)=>StyleSheet.create({
    text: { fontSize: 48, textAlign: "center", color:"black" }
  });

export default Button;
