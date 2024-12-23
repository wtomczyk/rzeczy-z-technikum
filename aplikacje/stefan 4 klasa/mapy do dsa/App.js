import {createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./Main"

const Root = createStackNavigator({
  s1: { screen: Main }
});

const App = createAppContainer(Root);

export default App;