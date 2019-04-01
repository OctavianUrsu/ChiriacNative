import { createStackNavigator, createAppContainer } from "react-navigation";
import Menu from "../screens/Menu";
import DatePersonale from "../screens/DatePersonale";
import Settings from "../screens/Settings";

const AppNavigator = createStackNavigator({
  Home: { screen: Menu },
  Settings: { screen: Settings },
  Date: { screen: DatePersonale }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
