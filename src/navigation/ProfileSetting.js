import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Platform, Image } from "react-native";
import { theme } from "../constants";
import Profile from "./../screens/Profile";
import Settings from "./../screens/Settings";
import ChangePwd from "./../screens/ChangePwd";
import EditProfile from "./../screens/EditProfile";

const Screens = createStackNavigator(
  { Profile, Settings, ChangePwd, EditProfile },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
      headerStyle: {
        height: theme.sizes.base * 4,

        paddingTop: Platform.OS === "ios" ? theme.sizes.padding * 1.33 : 0,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: (
        <Image
          source={require("../../assets/image/icons/ic_back.png")}
          style={{
            height: theme.sizes.iconSize - 5,
            width: theme.sizes.iconSize - 5
          }}
        />
      ),
      headerBackTitle: "Back",
      headerLeftContainerStyle: {
        alignItems: "center",
        // paddingLeft: theme.sizes.padding,
        paddingRight: theme.sizes.padding
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.padding
      },
      headerBackTitleStyle: {
        color: theme.colors.caption,
        fontSize: theme.sizes.caption
      }
    }
  }
);

export default createAppContainer(Screens);
