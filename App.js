/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
import { Text, Block, Input } from "./src/components";
const { width, height } = Dimensions.get("window");

import SplashScreen from "react-native-splash-screen";
import AppNavigator from "./src/navigation/AppNavigator";
import { TouchableOpacity } from "react-native";

import axios from "axios";
import { theme } from "./src/constants";
import { Body } from "native-base";
import Screens from "./src/navigation/Screens";

export default class App extends Component {
  componentDidMount() {
   
  }

  state = {
    tittle: "",
    body: "",
    userId: ""
  };

  testApi = () => {
    const { tittle, body, userId } = this.state;
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: tittle,
          body: body,
          userId: userId
        },
        {
          headers: {
            "Content-Type": "application/json"
            //other header fields
          }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1
  }
});
