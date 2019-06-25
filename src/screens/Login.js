//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Block, Text, Input, Button } from "./../components";
import { ImageBackground } from "react-native";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");
// create a component
class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Block flex={1} white>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/image/base/bg.jpeg")}
          style={{
            flex: 0.5,
            height: null,
            width: width,
            justifyContent: "center",
            borderBottomLeftRadius: 100
          }}
        >
          <Block middle color="#rgba(255,255,255,0.5)">
            <Text h1 size={24} style={{ marginLeft: theme.sizes.padding }}>
              Welcome Back !
            </Text>
          </Block>
        </ImageBackground>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <Block
            style={{
              marginRight: theme.sizes.padding,
              marginLeft: theme.sizes.padding,
              marginTop: theme.sizes.padding
            }}
          >
            <Text
              weight={"400"}
              size={theme.sizes.body}
              color={theme.colors.body}
              fontFamily={theme.fontFamily.regular}
            >
              Please login to continue.
            </Text>
            <Input
              labelColor={theme.colors.caption}
              label="Email Address"
              defaultValue="user@email.com"
              style={styles.input}
            />
            <Input
              secure
              labelColor={theme.colors.caption}
              label="Password"
              defaultValue="user@email.com"
              style={styles.input}
            />
            <Text
              caption
              size={14}
              weight="400"
              style={{
                alignSelf: "flex-end",
                marginBottom: theme.sizes.padding
              }}
            >
              Forgot Password?
            </Text>
            <Button color={theme.colors.primary}
            onPress ={() => this.props.navigation.navigate("Main")}
            >
              <Text
                white
                bold
                size={theme.sizes.button}
                style={{ paddingLeft: theme.sizes.padding }}
              >
                Login
              </Text>
            </Button>
            <Button
              color="transparent"
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text center bold primary>
                Create Account Here
              </Text>
            </Button>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1
  }
});

//make this component available to the app
export default Login;
