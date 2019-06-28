import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import RecipeFeed from "./../screens/RecipeFeed";
import { theme } from "../constants";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import RecipeNav from "./RecipeNav";

import { Icon ,Content} from "native-base";
import ProfileSetting from "./ProfileSetting";

//-- Exporting navigation class

const DashboardTabNavigator = createBottomTabNavigator(
  { Search, RecipeNav, ProfileSetting },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "RecipeNav") {
          return (
            <Image
              source={require("../../assets/image/icons/ic_feed.png")}
              style={[styles.iconStyle, { tintColor: tintColor }]}
            />
          );
        } else if (routeName === "Search") {
          return (
            <Image
              source={require("../../assets/image/icons/ic_search.png")}
              style={[styles.iconStyle, { tintColor: tintColor }]}
            />
          );
        } else {
          return (
            <Image
              source={require("../../assets/image/icons/ic_profile.png")}
              style={[styles.iconStyle, { tintColor: tintColor }]}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.activeColor,
      inactiveTintColor: theme.colors.inActiveColor,
      showLabel: false
    },
    navigationOptions: {
      header: null
    }
  }
);

export default createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

// export default createAppContainer(
//   createStackNavigator({
//     DashboardTabNavigator: DashboardTabNavigator
//   })
// );

const styles = StyleSheet.create({
  iconStyle: {
    width: theme.sizes.iconSize,
    height: theme.sizes.iconSize
  }
});
