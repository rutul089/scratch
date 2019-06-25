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
import { Text, Button, Block } from "../components";

import { theme } from "../constants";
import { Content, Card, CardItem, Body, Left } from "native-base";

import { Platform } from "react-native";

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

  renderHeader() {
    const { recipe } = this.state;
    return (
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
              width: width - theme.sizes.padding,
              marginLeft: theme.sizes.padding,
              paddingVertical: theme.sizes.padding,
              lineHeight: 32
            }}
          >
            {recipe.recipeName}
          </Text>
        </Block>
      </ImageBackground>
    );
  }

  renderIngredient() {
    return (
      <Card>
        <Text
          semibold
          black
          button
          style={{
            paddingRight: theme.sizes.padding / 2,
            paddingTop: theme.sizes.padding / 2,
            paddingLeft: theme.sizes.padding / 2
          }}
        >
          Ingredients
        </Text>
        <CardItem>
          <Body>
            <Text font black>
              cooking spray
            </Text>
            <Text font black>
              1/2 cup whole milk
            </Text>
            <Text font black>
              2 large eggs1 tablespoon maple syrup
            </Text>
            <Text font black>
              1/2 teaspoon vanilla extract
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }

  renderHowToCook() {
    return (
      <Card style={{ marginTop: theme.sizes.padding }}>
        <Text
          semibold
          black
          button
          style={{
            paddingRight: theme.sizes.padding / 2,
            paddingTop: theme.sizes.padding / 2,
            paddingLeft: theme.sizes.padding / 2,
            marginBottom: theme.sizes.padding / 2
          }}
        >
          How to cook
        </Text>

        {this.renderHowToCookItemBlock(1, "Heat a Belgian waffle iron.")}
        {this.renderHowToCookItemBlock(
          2,
          "Mix the flour, sugar, and baking powder together in a mixing bowl. Stir in 1 cup eggnog, butter, and the egg until well blended. Add more eggnog if needed to make a pourable batter"
        )}
        {this.renderHowToCookItemBlock(
          99,
          "Lightly grease or spray the waffle iron with non-stick cooking spray. Pour some batter onto the preheated waffle iron, "
        )}
        {this.renderHowToCookItemBlock(4, "Heat a Belgian waffle iron.")}
      </Card>
    );
  }

  renderHowToCookItemBlock = (index, item) => {
    return (
      <CardItem>
        <Block row>
          <Block style={styles.ovalShape} flex={false} center>
            <Text
              regular
              caption
              primary
              style={{
                textAlign: "center"
              }}
            >
              {index}
            </Text>
          </Block>
          <Block style={{ paddingLeft: theme.sizes.padding / 2 }}>
            <Text
              font
              style={{
                paddingTop: 0,
                alignItems: "flex-start",
                paddingHorizontal: theme.sizes.padding / 3,
                lineHeight: 22,
                textAlign: "justify"
              }}
            >
              {item}
            </Text>
          </Block>
        </Block>
      </CardItem>
    );
  };

  renderAdditionalItem() {
    return (
      <Card style={{ marginTop: theme.sizes.padding }}>
        <Text
          semibold
          black
          button
          style={{
            paddingRight: theme.sizes.padding / 2,
            paddingTop: theme.sizes.padding / 2,
            paddingLeft: theme.sizes.padding / 2,
            marginBottom: theme.sizes.padding / 2
          }}
        >
          Additional Info
        </Text>
        {this.renderAdditionalItemRow("Serving Time", "12 Mins")}
        {this.renderAdditionalItemRow(
          "Nutrition Facts",
          "222 calories, 6.2g fat, 7.2g carbohydrates, 28.6g protein, 68mg cholesterol, 268mg sodium"
        )}
        {this.renderAdditionalItemRow("Serves", "5")}
        {this.renderAdditionalItemRow(
          "Tags",
          "Sweet, Coconut, Quick, Easy, Homemade"
        )}
      </Card>
    );
  }
  renderAdditionalItemRow = (name, value) => {
    return (
      <Block
        flex={0}
        column
        style={{
          marginHorizontal: theme.sizes.padding / 2,
          marginVertical: theme.sizes.padding / 2
        }}
      >
        <Block row flex={1}>
          <Block flex={0.3}>
            <Text size={theme.sizes.body} color={theme.colors.caption}>
              {name}
            </Text>
          </Block>
          <Block flex={0.7} style={{ marginLeft: theme.sizes.padding / 2 }}>
            <Text
              font
              style={{
                paddingTop: 0,
                alignItems: "flex-start",
                paddingHorizontal: theme.sizes.padding / 3,
                lineHeight: 22,
                textAlign: "justify"
              }}
            >
              {value}
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };
  render() {
    const { recipe } = this.state;
    return (
      <React.Fragment>
        <Block flex={1} color="#FFFF">
          {this.renderHeader()}
          <Content style={{ flex: 0.5 }}>
            <Block
              style={{
                marginRight: theme.sizes.padding,
                marginLeft: theme.sizes.padding,
                marginTop: theme.sizes.padding
              }}
            >
              {this.renderIngredient()}
              {this.renderHowToCook()}
              {this.renderAdditionalItem()}
              <Button
                shadow
                color={theme.colors.white}
                style={{
                  borderWidth: 2,
                  borderColor: theme.colors.border,
                  marginTop: theme.sizes.padding
                }}
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Text primary center bold size={theme.sizes.button}>
                  Save Recipe
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
  },
  ovalShape: {
    height: 24,
    width: 24,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.primary,
    borderWidth: 1,
    textAlign: "center"
  }
});

//make this component available to the app
export default ViewRecipe;
