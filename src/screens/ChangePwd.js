//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import { theme } from "../constants";
import { Block, Button, Text, Input } from "./../components";
import { Content } from "native-base";

// create a component
class ChangePwd extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Change Password",
      headerTitleStyle: {
        fontSize: theme.sizes.h3,
        fontFamily: theme.fontFamily.bold
      }
    };
  };
  render() {
    return (
      <SafeAreaView flex={1}>
        <Content>
          <Block
            style={{
              marginRight: theme.sizes.padding,
              marginLeft: theme.sizes.padding,
              marginTop: theme.sizes.padding
            }}
          >
            <Input
              secure
              labelColor={theme.colors.caption}
              label="Old Password"
              defaultValue="user@email.com"
              style={styles.input}
            />
            <Input
              secure
              labelColor={theme.colors.caption}
              label="New Password"
              defaultValue="user@email.com"
              style={styles.input}
            />
            <Input
              secure
              labelColor={theme.colors.caption}
              label="Conform Password"
              defaultValue="user@email.com"
              style={styles.input}
            />
            <Button
              shadow
              color={theme.colors.white}
              style={{
                borderWidth: 2,
                borderColor: theme.colors.border,
                marginTop: theme.sizes.padding
              }}
              onPress={() => alert("Password changed successfully..")}
            >
              <Text primary center bold size={theme.sizes.button}>
                Change Password
              </Text>
            </Button>
          </Block>
        </Content>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: 1
  }
});

//make this component available to the app
export default ChangePwd;
