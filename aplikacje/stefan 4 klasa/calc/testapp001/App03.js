import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Comp from "./components/App03Comp"

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
      for(var a = 0;a<6;a++){
            var text = "Item "+(a+1)
            var key = "aaa_"+a
            tab.push(<Comp key={key} color={this.state.color[a]} flex={1} text={text}/>)
      }
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container}>     
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
 
});