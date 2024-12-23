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
            lightgraybutton:["C",'/','*','-','+'],
            string:"",
            wynik:"aa",
            ostatniznak:""
        };
        //console.log("App")
        this.aaa = this.aaa.bind(this)
    }
    aaa(a){
      console.log("aaaa " + a)
      console.log(this.state.string + " a")
      if(a=="="){
        if(this.state.string.slice(-1)!="/" && this.state.string.slice(-1)!="*" && this.state.string.slice(-1)!="-" && this.state.string.slice(-1)!="+"){
        var b = eval(this.state.string)
        console.log(b)
        this.setState({ wynik: b, string:"" }); 
        }
      }
      else if(a=="C"){
        if(this.state.string!=""){
          console.log(this.state.string.slice(0,-1))
          this.setState({ string: this.state.string.slice(0,-1) })
        }
      }
      else if(a=="/" || a=="*" || a=="-" || a=="+"){
        if(this.state.string!=""){
          if(this.state.string.slice(-1)!="/" && this.state.string.slice(-1)!="*" && this.state.string.slice(-1)!="-" && this.state.string.slice(-1)!="+"){
            var aa = this.state.string.toString()+a.toString()
            console.log(aa)
            this.setState({ string: aa }); 
          }
        }
      }
      else{
       var aa = this.state.string.toString()+a.toString()
      console.log(aa)

      this.setState({ string: aa }); 
      }
      
    }
  render() {
      var tab = []
      var licznik = 0
      for(var a=0;a<4;a++){
          var tab2 = []
          for(var b=0;b<3;b++){
            var text = (a+1)
            var key = "aaa_"+licznik
            var text = (licznik+1)
            if(text==10){
              text="."
            }
            else if(text==11){
              text=0
            }
            else if(text==12){
              text="="
            }
            tab2.push(<Button key={key} color={"gray"} flex={1} funkcja={this.aaa} text={text} fontcolor={"white"}/>)
            licznik++
          }
          key3 = "ccc_"+a
          tab.push(<View key={key3} style={styles.container}>{tab2}</View> )
      }
      var tab2 = []
      for(var a = 0;a<5;a++){
        var key = "aaa_"+licznik
        tab2.push(<Button key={key} color={"lightgray"} flex={1} funkcja={this.aaa} text={this.state.lightgraybutton[a]} fontcolor={"white"}/>)
        
        licznik++
      }
    var screen = <Screen key={"a"} string={this.state.string}/>
    var wynik = <Screen key={"b"} string={this.state.wynik}/>
    return (
      <View style={styles.container5}>
        <View style={styles.container4}>
          <View style={styles.container6}>
            {screen}
          </View>
          <View style={styles.container3}>
            {wynik}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.container2}>    
            {tab}
          </View>
          <View style={styles.container3}>    
            {tab2}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#ffff00',   
    flexDirection: 'row'
  }, 
  container2: {
    flex: 3,
    backgroundColor: '#ffff00',   
    flexDirection: 'column'
  }, 
  container3: {
    flex: 1,
    backgroundColor: '#ffff00',   
    flexDirection: 'column'
  }, 
  container4: {
    flex: 3,
    backgroundColor: '#ffff00',   
    flexDirection: 'column'
  }, 
  container5: {
    flex: 1,
    backgroundColor: '#ffff00',   
    flexDirection: 'column'
  }, 
  container6: {
    flex: 3,
    backgroundColor: '#ffff00',   
    flexDirection: 'column'
  },
});