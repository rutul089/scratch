//import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Block, Text, Button, Divider, Badge } from "../components";
import { theme, mocks } from "../constants";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Icon,
  Content
} from "native-base";
const { width } = Dimensions.get("window");
// create a component
class Profile extends Component {
  state = {
    active: "Recipes",
    recipeList: []
  };

  componentDidMount() {
    this.setState({ recipeList: this.props.recipeList });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Text h3 bold style={{ marginLeft: theme.sizes.padding }}>
          My Kitchen
        </Text>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: theme.sizes.iconSize,
              height: theme.sizes.iconSize,
              alignItems: "center"
            }}
            source={require("../../assets/image/icons/ic_setting.png")}
          />
        </TouchableOpacity>
      )
    };
  };

  handleTab = tab => {
    const { recipeList } = this.props;
    const filtered = recipeList.filter(category => category.tag.includes(tab));

    this.setState({ active: tab, recipeList: filtered });
  };

  renderHeader() {
    return (
      <Block flex={false} row>
        <Block flex={0.25}>
          <Thumbnail
            large
            source={require("../../assets/image/base/avtar.jpg")}
          />
        </Block>
        <Block flex={0.75} column style={{ marginLeft: theme.sizes.padding }}>
          <Block row>
            <Text button black style={{ flex: 1 }}>
              Nick Evans
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("EditProfile")}
            >
              <Image
                source={require("../../assets/image/icons/ic_edit.png")}
                style={{
                  height: theme.sizes.iconSize - 8,
                  width: theme.sizes.iconSize - 8
                }}
              />
            </TouchableOpacity>
          </Block>
          <Text
            body
            color={theme.colors.body}
            style={{ marginTop: theme.sizes.padding / 3 }}
          >
            Potato Master
          </Text>
          <Block
            row
            flex={false}
            style={{ marginTop: theme.sizes.padding / 2 }}
          >
            <Text body color={theme.colors.body} style={{ flex: 0.5 }}>
              584 followers
            </Text>
            <Text body color={theme.colors.body} style={{ flex: 0.5 }}>
              23k likes
            </Text>
          </Block>
        </Block>
      </Block>
    );
  }

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text button regular gray={!isActive} black={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const tabs = ["Recipes", "Save", "Following"];
    const { recipeList } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Block
          style={{
            paddingHorizontal: theme.sizes.padding,
            paddingVertical: theme.sizes.padding
          }}
        >
          {this.renderHeader()}
          <Divider style={{ marginTop: theme.sizes.padding + 5, flex: 0 }} />
          <Block flex={false} row style={styles.tabs}>
            {tabs.map(tab => this.renderTab(tab))}
          </Block>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingVertical: theme.sizes.base * 2 }}
          >
            <Block flex={false} row space="between" style={styles.categories}>
              {recipeList.map(category => (
                <TouchableOpacity
                  key={category.id}
                  onPress={() => alert(category.recipeName)}
                >
                  <Card style={styles.category}>
                    <Image
                      resizeMode="cover"
                      style={[styles.recommendationImage]}
                      source={category.image}
                    />
                    <CardItem
                      style={{
                        height: theme.sizes.padding * 3,
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        weight={"400"}
                        button
                        black
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={styles.textStyle}
                      >
                        {category.recipeName}
                      </Text>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              ))}
            </Block>
          </ScrollView>
        </Block>
      </SafeAreaView>
    );
  }
}

Profile.defaultProps = {
  recipeList: mocks.recipeList
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  textStyle: {
    textAlign: "center",
    alignItems: "center",
    padding: (theme.sizes.padding - 10) / 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3
  },
  tabs: {
    justifyContent: "space-between",
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: 1,
    marginTop: theme.sizes.base * 2
  },
  categories: {
    flexWrap: "wrap",
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 3) / 2,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    marginBottom: theme.sizes.padding,
    borderRadius: theme.sizes.radius
  },
  recommendationImage: {
    width: "100%",
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 3
  }
});

//make this component available to the app
export default Profile;
