import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Button from './components/Button';
class Screen2 extends Component {
    static navigationOptions = {
        // header: null,
        title: "tytuł numer 2",
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
    };
  }

  render() {

    console.log(this.props.navigation.state.params.a)
    console.log(this.props.navigation.state.params.b)
    return (
        <View>
            <Button
            title="go to screen1"
            onPress={() => this.props.navigation.navigate("s1")} 
            />
            <FlatList
            data={
                [
                { key: 'a' },
                { key: 'b' },
                { key: 'c' },
                ]
            }
            renderItem={({ item }) => <Text style={styles().text}>{item.key}</Text>}
            />
        </View>
    );
  }
}
const styles = (props)=>StyleSheet.create({
    text: { fontSize: 48, textAlign: "left", color:"red" }
  });

export default Screen2;
