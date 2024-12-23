import {createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./Main"
import Users from "./Users"

const Root = createStackNavigator({
  s1: { screen: Main },
  s2: { screen: Users },
});

const App = createAppContainer(Root);

export default App;