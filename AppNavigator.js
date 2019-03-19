import { createStackNavigator, createAppContainer } from "react-navigation";
import Menu from "./components/menu";
import Input from "./components/input";
import Forma from "./components/forma";

const AppNavigator = createStackNavigator({
  Home: { screen: Menu },
  Settings: { screen: Input },
  Date: { screen: Forma }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
