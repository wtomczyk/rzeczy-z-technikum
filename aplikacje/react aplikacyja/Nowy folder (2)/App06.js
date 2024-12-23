import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Comp from "./components/App06Comp"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color:["red","green","blue","yellow","pink","gray"],
        };
        console.log("App")
        onPress = () => {
          console.log("aaa")
        }
    }
  render() {
      var tab2=[]
      var licznik = 0
        for(var b=0;b<3;b++){
          var tab = []
          var tab1 = []
          for(var a = 0;a<6;a++){
              var text = (a+1)
              var key = "aaa_"+licznik
              var key2 = "bbb_"+licznik
              tab.push(<Comp key={key} color={this.state.color[a]} flex={1} text={text} fontcolor={"white"}/>)
              tab1.push(<Comp key={key2} color={this.state.color[a]} flex={1} text={text} fontcolor={"white"}/>)
              licznik++
          }
          var tab1 = tab1.reverse()
          key3 = "ccc_"+b
          key4 = "ddd_"+b
        tab2.push(<View key={key3} style={styles.container}>{tab1}</View> )
        tab2.push(<View key={key4} style={styles.container}>{tab}</View>)
      }
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container2}>    
        {tab2}
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