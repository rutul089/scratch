import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import RecipeFeed from "./../screens/RecipeFeed";
import { theme } from "../constants";

const screens = createStackNavigator(
  {
    RecipeFeed
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: (
        <Image source={require("../../assets/image/icons/ic_back.png")} />
      ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);
export default createAppContainer(screens);