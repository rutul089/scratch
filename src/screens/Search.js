//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableNativeFeedback,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";
import { theme, mocks } from "../constants";
import { CardItem, Card, Left, Body, Right, Content } from "native-base";
import { Block, Input, Text, ImagePlaceholder } from "../components";
import { Thumbnail } from "native-base";
import Geolocation from "react-native-geolocation-service";
import { Platform } from "react-native";

const { width, height } = Dimensions.get("window");
//-- Function for checking location and getting current location
export function getLocation() {
  Geolocation.getCurrentPosition(
    position => {
      console.log(
        "Your Current latitude is " +
          position.coords.latitude +
          " and longitude " +
          position.coords.longitude +
          " <----- Location"
      );
      console.log(JSON.stringify(position) + " <----- Location");
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message + " <----- errir");
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
}

export async function requestLocationPermission() {
  try {
    if (Platform.OS === "ios") {
      getLocation();
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "Allow Scratch to access this device's location ? "
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "Allow Scratch to access this device's location ? "
          }
        );
      }
    }
  } catch (err) {
    console.warn(err + "====>");
  }
}
// create a component
class Search extends Component {
  state = {
    search: "",
    trending: [],
    recommendation: []
  };

  async componentDidMount() {
    this.setState({
      trending: this.props.trending,
      recommendation: this.props.recommendation
    });

    await requestLocationPermission();
  }

  //-- To update search value
  _updateSearch = text => {
    let keyword = text;
    const { trending, recommendation } = this.props;
    this.setState({
      search: text
    });
  };

  //-- UI for search view
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
                onChangeText={text => this._updateSearch(text)}
                placeholderTextColor="grey"
                style={styles.input}
              />
              <TouchableOpacity onPress={() => Keyboard.dismiss()}>
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

  //-- UI for recommendation item
  renderRecommendationItem(item) {
    return (
      <Block flex={0}>
        <TouchableOpacity activeOpacity={1} onPress={() => alert("test")}>
          <Card style={styles.recommendation}>
            <Image
              resizeMode="cover"
              style={[styles.recommendationImage]}
              source={item.image}
            />
            <CardItem
              style={{
                height: theme.sizes.padding * 3,
                justifyContent: "flex-start",
                paddingBottom: 0,
                paddingLeft: 2,
                paddingRight: 0,
                paddingTop: 0
              }}
            >
              <Text
                weight={"400"}
                button
                black
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{
                  textAlign: "left",
                  alignItems: "flex-start",
                  paddingTop: 0
                }}
              >
                {item.recipeName}
              </Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </Block>
    );
  }

  //-- Render Trending
  renderTrending = () => {
    const { trending } = this.state;
    const { search } = this.state;
    let filterTrending = trending.filter(
      name => name.recipeName.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
    return (
      <Block column flex={0}>
        <FlatList
          style={{ padding: 5 }}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={filterTrending}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => this.renderRecommendationItem(item)}
        />
      </Block>
    );
  };

  //--suggestedRecipe
  suggestedRecipe = () => {
    const { recommendation } = this.state;
    const { search } = this.state;
    let filterTrending = recommendation.filter(
      name => name.recipeName.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    return (
      <Block column flex={0}>
        <FlatList
          horizontal
          style={{ padding: 5 }}
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={filterTrending}
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
            showsHorizontalScrollIndicator={true}
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
    backgroundColor: theme.colors.accent,
    width: (width - theme.sizes.padding * 2) / 2.5,
    height: (width - theme.sizes.padding * 3.2) / 2
  },
  profile: {
    width: (width - theme.sizes.padding * 2.2) / 2,
    alignItems: "center",
    justifyContent: "flex-end",
    height: (width - theme.sizes.padding * 3.2) / 2
  },
  profiles: {
    width: (width - theme.sizes.padding * 2.2) / 2,
    marginRight: theme.sizes.padding / 2,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.padding * 0.5
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
