//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components";

// create a component
class ViewRecipe extends Component {
  state = {
    recipe: []
  };
  componentDidMount = () => {
    const recipes = this.props.navigation.getParam("item");
    this.setState({ recipe: recipes });
    console.log(recipes);
  };

  render() {
    const { recipe } = this.state;
    return (
      <View style={styles.container}>
        <Text h1>{recipe.recipeName}</Text>
      </View>
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
  }
});

//make this component available to the app
export default ViewRecipe;
