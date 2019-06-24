//import liraries
import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList
} from "react-native";

import { Block, Text, Button } from "../components";
import { theme, mocks } from "../constants";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Icon
} from "native-base";

const { width, height } = Dimensions.get("window");

// create a component
class RecipeFeed extends Component {
  state = {
    isLike: false,
    recipe: []
  };

  componentDidMount() {
    this.setState({ recipe: this.props.recipe });
  }

  static navigationOptions = {
    headerLeft: (
      <Image
        resizeMode="contain"
        style={{ width: 150, height: theme.sizes.iconSize }}
        source={require("../../assets/image/icons/logo.png")}
      />
    ),
    headerRight: (
      <Block style={{ justifyContent: "space-between" }} row>
        <TouchableOpacity onPress={() => alert("Notification")}>
          <Image
            style={{
              width: theme.sizes.iconSize,
              height: theme.sizes.iconSize,
              marginRight: theme.sizes.padding
            }}
            source={require("../../assets/image/icons/ic_notification.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Message")}>
          <Image
            style={{
              width: theme.sizes.iconSize,
              height: theme.sizes.iconSize
            }}
            source={require("../../assets/image/icons/ic_message.png")}
          />
        </TouchableOpacity>
      </Block>
    )
  };

  renderCardView(item) {
    const { recipe } = this.state;
    return (
      <Block
        style={{
          marginTop: theme.sizes.padding,
          marginLeft: theme.sizes.padding,
          marginRight: theme.sizes.padding
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate("ViewRecipe", { item })}
        >
          <Card
            style={{
              width: width - theme.sizes.padding * 2
            }}
          >
            <ImageBackground
              resizeMode="cover"
              style={{ flex: 0, width: "100%", height: width * 0.8 }}
              source={item.image}
            >
              <CardItem
                style={{
                  backgroundColor: "#rgba(255,255,255,0.95)",
                  borderRadius: 0
                }}
              >
                <Left>
                  <Thumbnail small source={item.picture} />
                  <Body>
                    <Text
                      black
                      body
                      style={{ fontWeight: "400", lineHeight: 16 }}
                    >
                      {item.userName}
                    </Text>
                    <Text gray caption>
                      {item.time}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </ImageBackground>
            <CardItem>
              <Body>
                <Text h4 style={{ marginTop: theme.sizes.padding / 2 }}>
                  {item.recipeName}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  caption
                  style={{
                    fontSize: theme.sizes.base,
                    marginTop: theme.sizes.padding / 2,
                    lineHeight: 20,
                    fontWeight: "400",
                    textAlign: "justify"
                  }}
                >
                  {item.recipeNot}
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingTop: 0 }}>
              <Left>
                <Button
                  style={styles.toggle}
                  onPress={() => this.setState({ isLike: !this.state.isLike })}
                >
                  <Image
                    resizeMode="contain"
                    source={
                      item.isLike
                        ? require("../../assets/image/icons/ic_saved.png")
                        : require("../../assets/image/icons/ic_save.png")
                    }
                    style={{
                      height: theme.sizes.font * 2,
                      width: theme.sizes.font * 2
                    }}
                  />
                </Button>
                <Text body color={theme.colors.body}>
                  {item.like}
                </Text>
              </Left>
              <Body />
              <Right>
                <Button style={styles.btnStyle} onPress={() => alert(item.id)}>
                  <Text
                    medium
                    button
                    primary
                    style={{ paddingHorizontal: theme.sizes.padding }}
                  >
                    Save
                  </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </TouchableWithoutFeedback>
      </Block>
    );
  }

  renderRecipeList = () => {
    const { recipe } = this.props;
    return (
      <FlatList
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={recipe}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => this.renderCardView(item)}
      />
    );
  };
  render() {
    return (
      <Block flex={1} white>
        {this.renderRecipeList()}
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
    backgroundColor: "#fff"
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
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5
  },
  destination: {
    width: width - theme.sizes.padding * 2,
    height: width * 0.8
    // marginHorizontal: theme.sizes.margin,
    // paddingHorizontal: theme.sizes.padding,
    // paddingVertical: theme.sizes.padding * 0.66,
    // borderRadius: theme.sizes.radius
  },
  destinationInfo: {
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2
  },
  btnStyle: {
    borderRadius: 5,
    borderWidth: 1,
    height: 25,
    borderColor: theme.colors.border,

    justifyContent: "center",
    alignContent: "center"
  },
  toggle: {
    marginRight: 10
  }
});

RecipeFeed.defaultProps = {
  recipe: mocks.recipe
};
//make this component available to the app
export default RecipeFeed;
