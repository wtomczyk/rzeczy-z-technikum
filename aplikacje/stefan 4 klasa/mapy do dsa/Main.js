import React, { Component } from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import Button from './components/Button2';
import MapView from 'react-native-maps';

class Main extends Component {
  static navigationOptions = {
    //header: null,
  }
  constructor(props) {
    super(props);
    this.state = {

    };

    }
  render() {
    return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 50.111,
                    longitude: 20.111,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
            >
                <MapView.Marker
    coordinate={{
        latitude: 50.111,
        longitude: 20.111,
    }}
    title={"pos"}
    description={"opis"}
/>
            </MapView>
    );
  }
}

export default Main;
