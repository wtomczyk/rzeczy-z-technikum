import React, { Component } from 'react';
import { View, Text } from 'react-native';

class KółkoCoSięKręci extends Component {
    static navigationOptions = {
        //header: null,
      }
      constructor(props) {
        super(props);
        this.state = {
            number:0
        };
      }

  render() {
    return (
        <View style={{flex:1}}>
        {
            this.state.number == 0 ?
                <ActivityIndicator size="large" color="#00ffff" />
                :
                <ActivityIndicator size="small" color="#000000" />
        }
        </View>
    );
  }
}

export default KółkoCoSięKręci;
