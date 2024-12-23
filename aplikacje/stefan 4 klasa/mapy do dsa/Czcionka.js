import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as Font from "expo-font";

class Main extends Component {
  static navigationOptions = {
    //header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
        number:0,
        fontloaded:false
    };
  }
  componentWillMount = async () => {
    await Font.loadAsync({
        'myfont': require('./components/FloppyDisk.ttf'),
    });
    this.setState({ fontloaded: true })
    }
  render() {
    return (
        this.state.fontloaded
        ?
        <View style={{flex:1}}>
            <Text style={{
                fontFamily: 'myfont',
                fontSize: 100
            }}>Test</Text>
        </View>
        :
        null
    );
  }
}

export default Main;
