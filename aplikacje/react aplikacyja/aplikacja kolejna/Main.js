import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native';
import Button from './components/Button';
class Screen1 extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: "green",
        }
    }
  constructor(props) {
    super(props);
    this.state = {
        text2:'',
        text3:''
    };
    this.funkcja = this.funkcja.bind(this)
  }
  funkcja(){
    
  }
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={{fontSize: 42, textAlign:"center", color:"white"}}>Register Node App</Text>
            </View>
            <View style={styles.container}>
                <Text style={{padding: 10}}>Username</Text>
                <TextInput 
                    style={{height: 40, margin: 10, borderBottomWidth:1, borderBottomColor:"green"}}
                    placeholder=""
                    onChangeText={(text2) => this.setState({text2})}
                    value={this.state.text2}>
                </TextInput>
                <Text style={{padding: 10}}>Password</Text>
                <TextInput 
                    style={{height: 40,  margin: 10, borderBottomWidth:1, borderBottomColor:"green"}}
                    placeholder=""
                    onChangeText={(text3) => this.setState({text3})}
                    value={this.state.text3}>
                </TextInput>
                <Button
                title="Register"
                onPress={() => this.props.navigation.navigate("s2", {a: this.state.text2,b: this.state.text3})} 
                />
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }, 
    container2: {
      flex: 1,
      backgroundColor:"lightgreen",
      justifyContent:"center"
    }, 
  });
export default Screen1;
