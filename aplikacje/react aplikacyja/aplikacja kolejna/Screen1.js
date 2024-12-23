import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import Button from './components/Button';
class Screen1 extends Component {
    static navigationOptions = {
        // header: null,
        title: "tytuł numer 1",
        headerStyle: {
          backgroundColor: "#ff0000",
        },
        headerTitleStyle: {
          color: "#ffffff"
        }
    }
  constructor(props) {
    super(props);
    this.state = {
        text:''
    };
  }

  render() {
    return (
        <View>
                <Button
                title="go to screen2"
                onPress={() => this.props.navigation.navigate("s2", {a: 1,b: 2})} 
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && 'a').join(' ')}
                </Text>
        </View>
    );
  }
}

export default Screen1;
