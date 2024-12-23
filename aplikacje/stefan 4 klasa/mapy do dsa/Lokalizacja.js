import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

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
  setPermissions = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        alert('odmawiam przydzielenia uprawnień do czytania lokalizacji')
        }
    }

    componentWillMount = async () => {
    await Font.loadAsync({
        'myfont': require('./components/FloppyDisk.ttf'),
    });
    this.setState({ fontloaded: true })
    this.setPermissions()
    this.getPosition()
    }
    getPosition = async () => {
        let pos = await Location.getCurrentPositionAsync({})
        alert(JSON.stringify(pos, null, 4))
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
