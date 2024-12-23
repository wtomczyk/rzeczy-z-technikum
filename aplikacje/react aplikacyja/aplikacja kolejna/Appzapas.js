import {createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"

const Root = createStackNavigator({
  s1: { screen: Screen1 },
  s2: { screen: Screen2 },
});

const App = createAppContainer(Root);

export default App;