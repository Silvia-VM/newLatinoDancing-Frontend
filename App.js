import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./src/containers/HomeScreen";
import ListSoirees from "./src/containers/ListSoirees";

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Lists: ListSoirees
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      App: AppStack
    },
    {
      initialRouteName: "Home"
    }
  )
);
