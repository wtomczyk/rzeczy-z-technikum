import React, { Component } from 'react';
import { View, Text, AsyncStorage  } from 'react-native';
import Button from './components/Button2';

class Main extends Component {
  static navigationOptions = {
    //header: null,
  }
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getData = this.getData.bind(this)
    this.setData = this.setData.bind(this)
    this.getAllData = this.getAllData.bind(this)
  }
    setData = async () => {
    await AsyncStorage.setItem('key1', 'value1');
    await AsyncStorage.setItem('key' + Math.round(Math.random()*100), 'value' + Math.random());
    }
    getData = async () => {
        let val = await AsyncStorage.getItem('key1');
        console.log(val);
    }
    getAllData = async () => {
        let keys = await AsyncStorage.getAllKeys();
        console.log("keys", keys)
        let stores = await AsyncStorage.multiGet(keys);
        console.log("stores", stores)
        let maps = stores.map((result, i, store) => {
          let key = store[i][0];
          let value = store[i][1];
          console.log(key, value)
        });
    }
  render() {
    return (

        <View style={{flex:1}}>
            <Button
                title="Set Data"
                onPress={() => this.setData()} 
            />
            <Button
                title="Get Data"
                onPress={() => this.getData()} 
            />
            <Button
                title="Get All Data"
                onPress={() => this.getAllData()} 
            />
        </View>

    );
  }
}

export default Main;
