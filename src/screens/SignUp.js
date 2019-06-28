//import liraries
import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Block, Text, Button, Input } from "../components";

import { theme } from "../constants";
import { Content } from "native-base";
const { width, height } = Dimensions.get("window");
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
// create a component
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      selectedDate: "dd/MM/YYYY"
    };
  }

  handlePicker = dateTime => {
    this.setState({
      isVisible: false,
      selectedDate: moment(dateTime).format("DD MMM YYYY")
    });
  };
  showPicker = () => {
    this.setState({
      isVisible: true
    });
  };
  hidePicker = () => {
    this.setState({
      isVisible: false
    });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Block flex={0} row style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../../assets/image/icons/ic_back.png")}
              style={{
                height: theme.sizes.iconSize,
                width: theme.sizes.iconSize
              }}
            />
          </TouchableOpacity>
        </Block>
      ),
      headerTransparent: true
    };
  };
  render() {
    return (
      <React.Fragment>
        <Block flex={1} color="#FFFF">
          <ImageBackground
            resizeMode="cover"
            source={require("../../assets/image/base/bg.jpeg")}
            style={{
              flex: 0.7,
              height: null,
              width: width,
              justifyContent: "center",
              borderBottomLeftRadius: 100
            }}
          >
            <Block middle color="#rgba(255,255,255,0.4)">
              <Text h1 size={24} style={{ marginLeft: theme.sizes.padding }}>
                Start
              </Text>
              <Text h1 size={24} style={{ marginLeft: theme.sizes.padding }}>
                from Scratch
              </Text>
            </Block>
          </ImageBackground>
          <Content style={{ flex: 0.5 }}>
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
                Create account to continue.
              </Text>
              <Input
                labelColor={theme.colors.caption}
                label="Full Name"
                defaultValue=""
                style={styles.input}
              />
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
              <Block
                row
                center
                style={{
                  justifyContent: "space-between",
                  marginTop: theme.sizes.base,
                  marginBottom: theme.sizes.padding
                }}
              >
                <Text color={theme.colors.caption} size={theme.sizes.font - 1}>
                  Date Of Birth
                </Text>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => this.showPicker()}
                >
                  <Image
                    style={{
                      height: theme.sizes.iconSize - 10,
                      width: theme.sizes.iconSize - 10,
                      tintColor: theme.colors.black
                    }}
                    source={require("../../assets/image/icons/ic_time.png")}
                  />
                </TouchableOpacity>
              </Block>
              <DateTimePicker
                isVisible={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                mode={"date"}
              />
              <Text style={styles.dateStyle}>{this.state.selectedDate}</Text>
              <Button
                color={theme.colors.primary}
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Text
                  white
                  bold
                  center
                  size={theme.sizes.button}
                  style={{ paddingLeft: theme.sizes.padding }}
                >
                  Create Account
                </Text>
              </Button>
              <Button
                color="transparent"
                style={{ margin: theme.sizes.padding }}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text center bold primary button>
                  Login Here
                </Text>
              </Button>
            </Block>
          </Content>
        </Block>
      </React.Fragment>
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
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: 1
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  header: {
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  dateStyle: {
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: "400",
    color: theme.colors.black,
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: 1,
    height: theme.sizes.base * 2
  }
});

//make this component available to the app
export default SignUp;
