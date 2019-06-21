import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Auth from "./Auth";
import Screens from "./Screens"
export default createAppContainer(
  createSwitchNavigator({
    Auth,
    Main: Screens
  })
);
