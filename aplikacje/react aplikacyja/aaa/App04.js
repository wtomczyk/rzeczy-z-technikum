import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Comp from "./components/App04Comp"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color:["red","green","blue","yellow","pink","gray"],
        };
        console.log("App")
    }
  render() {
      var tab = []
      var tab1 = []
      for(var a = 0;a<6;a++){
          var text = "Item "+(a+1)
          var key = "aaa_"+a
          var key2 = "bbb_"+a
          tab.push(<Comp key={key} color={this.state.color[a]} flex={1} text={text} fontcolor={"white"}/>)
          tab1.push(<Comp key={key2} color={this.state.color[a]} flex={1} text={text} fontcolor={"black"}/>)
      }
      var tab1 = tab1.reverse()
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container2}>    
        <View style={styles.container}>
          {tab}  
        </View> 
        <View style={styles.container}>
          {tab1}
        </View>
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