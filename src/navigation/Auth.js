import React from "react";
import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import { theme } from "../constants";
import { Image } from "react-native";

export default createStackNavigator(
  { Login, SignUp },
  {
    defaultNavigationOptions: {
      headerTransparent: true,
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },

      // headerBackImage: (
      //   <Image source={require("../../assets/image/icons/ic_back.png")} />
      // ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.padding,
        paddingRight: theme.sizes.padding
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.padding
      }
    }
  }
);
