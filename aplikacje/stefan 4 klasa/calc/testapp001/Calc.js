import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Button from "./components/Button"
import Screen from "./components/Screen"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
  render() {
      var tab = []
      var licznik = 0
      for(var a=0;a<4;a++){
          var tab2 = []
          for(var b=0;b<4;b++){
            var text = (a+1)
            var key = "aaa_"+licznik
            tab2.push(<Button key={key} color={"gray"} flex={1} text={text} fontcolor={"white"}/>)
          }
          key3 = "ccc_"+b
          tab.push(<View key={key3} style={styles.container}>{tab1}</View> )
          licznik++
      }
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container2}>    
        {tab}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',   
  }, 
  container2: {
    flex: 1,
    backgroundColor: '#ffff00',   
    flexDirection: 'row'
  }, 
});