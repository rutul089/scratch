import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Platform } from "react-native";
import { theme } from "../constants";
import RecipeFeed from "./../screens/RecipeFeed";
import ViewRecipe from "./../screens/ViewRecipe";

const Screens = createStackNavigator(
  {
    RecipeFeed,
    ViewRecipe
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,

        paddingTop: Platform.OS === "ios" ? theme.sizes.padding * 1.33 : 0,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        // marginLeft: theme.sizes.padding,
        paddingRight: theme.sizes.padding
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.padding
      }
    }
  }
);

export default createAppContainer(Screens);
