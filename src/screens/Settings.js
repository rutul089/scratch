//import liraries
import React, { Component } from "react";
import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { theme } from "../constants";
import { Block, Text, Switch, Divider } from "./../components/";

// create a component
class Settings extends Component {
  state = {
    follower: false,
    message: true,
    live: false,
    saveRecipe: false,
    profile: true
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Scratch", "Are you sure you wan to Logout ?", [
              {
                text: "No",
                style: "cancel"
              },
              { text: "Yes", onPress: () => navigation.navigate("Auth") }
            ])
          }
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: theme.sizes.iconSize,
              height: theme.sizes.iconSize,
              alignItems: "center"
            }}
            source={require("../../assets/image/icons/ic_logout.png")}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <React.Fragment>
          <Text
            h3
            bold
            style={{
              marginTop: theme.sizes.padding / 2,
              marginRight: theme.sizes.padding,
              marginLeft: theme.sizes.padding
            }}
          >
            Settings
          </Text>
          <ScrollView>
            <Block
              style={{
                marginTop: theme.sizes.padding / 2,
                marginRight: theme.sizes.padding,
                marginLeft: theme.sizes.padding
              }}
            >
              <Text
                size={theme.sizes.font + 2}
                color={theme.colors.body}
                style={styles.margin}
              >
                Push Notification
              </Text>
              <Block row center space="between" style={styles.margin}>
                <Text size={18} style={styles.textStyle}>
                  Notify me for followers
                </Text>
                <Switch
                  value={this.state.follower}
                  onValueChange={value => this.setState({ follower: value })}
                />
              </Block>
              <Block row center space="between" style={styles.margin}>
                <Text size={18} style={styles.textStyle}>
                  When someone send me a message
                </Text>
                <Switch
                  value={this.state.message}
                  onValueChange={value => this.setState({ message: value })}
                />
              </Block>
              <Block row center space="between" style={styles.margin}>
                <Text size={18} style={styles.textStyle}>
                  When someone do live cooking
                </Text>
                <Switch
                  value={this.state.live}
                  onValueChange={value => this.setState({ live: value })}
                />
              </Block>
              <Divider style={{ marginTop: 30 }} />
              <Text
                size={theme.sizes.font + 2}
                color={theme.colors.body}
                style={styles.margin}
              >
                Privacy Settings
              </Text>
              <Block row center space="between" style={styles.margin}>
                <Text size={18} style={styles.textStyle}>
                  Followers can see my saved recipes
                </Text>
                <Switch
                  value={this.state.saveRecipe}
                  onValueChange={value => this.setState({ saveRecipe: value })}
                />
              </Block>
              <Block
                flex={0}
                color={theme.colors.gray3}
                style={{
                  padding: theme.sizes.padding / 2,
                  marginTop: theme.sizes.base + 5
                }}
              >
                <Text
                  caption
                  black
                  style={{
                    textAlign: "justify",
                    lineHeight: 22
                  }}
                >
                  If disabled, you won’t be able to see recipes saved by other
                  profiles.Leave this enabled to share your collected .
                </Text>
              </Block>

              <Block row center space="between" style={styles.margin}>
                <Text size={18} style={{ lineHeight: 22 }}>
                  Followers can see profiles I follow
                </Text>
                <Switch
                  value={this.state.profile}
                  onValueChange={value => this.setState({ profile: value })}
                />
              </Block>
              <Divider style={{ marginTop: 30 }} />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ChangePwd")}
              >
                <Block row center space="between" style={styles.margin}>
                  <Text size={18} style={{ lineHeight: 22 }}>
                    Change Password
                  </Text>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/image/icons/ic_right.png")}
                    style={{
                      height: theme.sizes.font + 10,
                      width: theme.sizes.font + 10
                    }}
                  />
                </Block>
              </TouchableOpacity>
              <Divider style={{ marginTop: 30, marginBottom: 30 }} />
            </Block>
          </ScrollView>
        </React.Fragment>
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
  margin: {
    marginTop: theme.sizes.padding + 5
  },
  textStyle: {
    lineHeight: 22,
    flex: 0.75
  }
});

//make this component available to the app
export default Settings;
