//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Text } from "../components";
import Block from "./../components/Block";
import { theme } from "../constants";
import { Content } from "native-base";
const { width, height } = Dimensions.get("window");
// create a component
class ViewRecipe extends Component {
  state = {
    recipe: []
  };
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Block flex={0} row style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Block row center>
              <Image
                source={require("../../assets/image/icons/ic_back.png")}
                style={{
                  tintColor: theme.colors.white,
                  height: theme.sizes.iconSize - 10,
                  width: theme.sizes.iconSize - 10
                }}
              />
              <Text caption white>
                Back to..
              </Text>
            </Block>
          </TouchableOpacity>
        </Block>
      ),
      headerTransparent: true
    };
  };
  componentDidMount = () => {
    const recipes = this.props.navigation.getParam("item");
    this.setState({ recipe: recipes });
    console.log(recipes);
  };

  render() {
    const { recipe } = this.state;
    return (
      <React.Fragment>
        <Block flex={1} color="#FFFF">
          <ImageBackground
            resizeMode="cover"
            source={recipe.image}
            style={{
              flex: 0.7,
              height: null,
              width: width,
              justifyContent: "center",
              borderBottomLeftRadius: 100
            }}
          >
            <Block bottom color="#rgba(40,41,40,0.5)">
              <Text
                h1
                white
                size={24}
                style={{
                  marginLeft: theme.sizes.padding,
                  padding: 5,
                  lineHeight: 32
                }}
              >
                {recipe.recipeName}
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
    backgroundColor: "#fff"
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
  }
});

//make this component available to the app
export default ViewRecipe;
