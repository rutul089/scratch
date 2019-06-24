//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { theme, mocks } from "../constants";
import { CardItem, Card, Left, Body, Right, Content } from "native-base";
import { Block, Input, Text } from "../components";

const { width, height } = Dimensions.get("window");
// create a component
class Search extends Component {
  renderSearchView() {
    return (
      <Block
        flex={false}
        style={{
          height: 46
        }}
      >
        <Card>
          <CardItem>
            <Block row style={{ justifyContent: "space-around" }}>
              <Image
                source={require("../../assets/image/icons/ic_search.png")}
                style={styles.iconStyle}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search recipe, people, or tag"
                placeholderTextColor="grey"
                style={styles.input}
              />
              <TouchableOpacity onPress={() => alert("filter")}>
                <Image
                  source={require("../../assets/image/icons/ic_filter.png")}
                  style={[styles.iconStyle, { tintColor: theme.colors.black }]}
                />
              </TouchableOpacity>
            </Block>
          </CardItem>
        </Card>
      </Block>
    );
  }

  renderRecommendationItem(item) {
    return (
      <Block flex={0} shadow column style={styles.recommendation}>
        <Block flex={0} color="#F1F4F9">
          <Image
            resizeMode="cover"
            style={[styles.recommendationImage]}
            source={item.image}
          />
        </Block>
        <Block
          flex={0}
          shadow
          column
          style={{
            height: theme.sizes.padding * 2.8,
            padding: theme.sizes.padding / 3
          }}
        >
          <Text weight={"400"} button black>
            {item.recipeName}
          </Text>
        </Block>
      </Block>
    );
  }
  //-- Render Trending
  renderTrending = () => {
    const { trending } = this.props;
    return (
      <Block column flex={0}>
        <FlatList
          style={{ padding: 5 }}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={16}
          data={trending}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => this.renderRecommendationItem(item)}
        />
      </Block>
    );
  };
  //--suggestedRecipe
  suggestedRecipe = () => {
    const { recommendation } = this.props;
    return (
      <Block column flex={0}>
        <FlatList
          horizontal
          style={{ padding: 5 }}
          scrollEnabled
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={16}
          data={recommendation}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => this.renderRecommendationItem(item)}
        />
      </Block>
    );
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Block flex={1} style={{ margin: theme.sizes.padding }}>
          {this.renderSearchView()}
          <ScrollView
            scrollEventThrottle={16}
            style={{ marginTop: theme.sizes.padding * 1.5 }}
          >
            <Block white style={{ marginTop: theme.sizes.padding }}>
              <Text button bold>
                Trending Recipe
              </Text>
            </Block>

            {this.renderTrending()}
            <View
              style={{
                flex: 1,
                marginTop: theme.sizes.padding,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.gray3
              }}
            />
            <Block white style={{ marginTop: theme.sizes.padding }}>
              <Text button bold>
                Suggested Recipe
              </Text>
            </Block>
            {this.suggestedRecipe()}
            <View
              style={{
                flex: 1,
                marginTop: theme.sizes.padding,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.gray3
              }}
            />
            <Block
              white
              style={{
                marginTop: theme.sizes.padding,
                justifyContent: "space-between"
              }}
              row
              flex={1}
            >
              <Text button bold>
                Recipes
              </Text>
              <TouchableOpacity>
                <Text button bold primary>
                  show all (200+)
                </Text>
              </TouchableOpacity>
            </Block>
            {this.suggestedRecipe()}
          </ScrollView>
        </Block>
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
    backgroundColor: "#2c3e50"
  },
  iconStyle: {
    height: theme.sizes.font * 2,
    width: theme.sizes.font * 2
  },
  input: {
    flex: 1,
    fontSize: theme.sizes.body,
    marginHorizontal: theme.sizes.padding - 10,
    fontWeight: "400",
    padding: 0,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.caption,
    backgroundColor: "white"
  },
  recommendation: {
    width: (width - theme.sizes.padding * 2) / 2.5,
    marginRight: theme.sizes.padding / 2,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.padding * 0.5
  },
  recommendationImage: {
    width: (width - theme.sizes.padding * 2) / 2.5,
    height: (width - theme.sizes.padding * 3.2) / 2
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5
  }
});
Search.defaultProps = {
  trending: mocks.trending,
  recommendation: mocks.recommended
};
//make this component available to the app
export default Search;
