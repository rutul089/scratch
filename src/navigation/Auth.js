import React from "react";
import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

export default createStackNavigator(
  { Login, SignUp },
  {
    defaultNavigationOptions: {
        header: null,
    }
  }
);
