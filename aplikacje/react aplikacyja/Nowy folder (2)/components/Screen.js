import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        wyliczenia:this.props.string
    };  
  }
  render() {
      var a = this.props.string
    return (
            <Text style={styles(this.props).text}> {a}  </Text>
    );
  }
}

const styles = (props)=>StyleSheet.create({
  text: { fontSize: 56, textAlign: "right", color:"white",backgroundColor:"cyan", height:"100%", width:"100%"},
  container2: {
    flex: 1,
    flexDirection: 'column'
  }, 
  container1: {
    flex: 2,
    flexDirection: 'column'
  }, 
});

export default Screen;