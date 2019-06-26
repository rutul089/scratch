const recipe = [
  {
    id: "1",
    userName: "Judith Gibson",
    picture: require("../../assets/image/base/avtar.jpg"),
    time: "1h ago",
    recipeName: "Red wine and Mint Souffle",
    recipeNot:
      "Apparently we had reached a great height in the atmosphere, for the sky was.",
    like: "32 Likes",
    isLike: true,
    image: require("../../assets/image/base/img1.jpg")
  },
  {
    id: "2",
    userName: "Eugene Thomas",
    picture: require("../../assets/image/base/avtar2.jpg"),
    time: "2h ago",
    recipeName: "Fire-Grilled and Tortilla",
    recipeNot:
      "Apparently we had reached a great height in the atmosphere, for the sky was.",
    like: "10 Likes",
    isLike: false,
    image: require("../../assets/image/base/img2.jpeg")
  },
  {
    id: "3",
    userName: "Rachel Simpson",
    picture: require("../../assets/image/base/avtar1.jpg"),
    time: "30min ago",
    recipeName: "White Wine Toffee",
    recipeNot:
      "Apparently we had reached a great height in the atmosphere, for the sky was.",
    like: "1 Likes",
    isLike: false,
    image: require("../../assets/image/base/img4.jpg")
  },
  {
    id: "4",
    userName: "Rachel Simpson",
    picture: require("../../assets/image/base/avtar1.jpg"),
    time: "30min ago",
    recipeName: "Cured Vegetable",
    recipeNot:
      "Apparently we had reached a great height in the atmosphere, for the sky was.",
    like: "32 Likes",
    isLike: true,
    image: require("../../assets/image/base/img3.jpeg")
  },
  {
    id: "5",
    userName: "Judith Gibson",
    picture: require("../../assets/image/base/avtar.jpg"),
    time: "1h ago",
    recipeName: "Engine-Cooked Honey Orange Pancake",
    recipeNot:
      "Apparently we had reached a great height in the atmosphere, for the sky was.",
    like: "32 Likes",
    isLike: true,
    image: require("../../assets/image/base/img5.jpg")
  }
];

const trending = [
  {
    id: "1",
    recipeName: "Banana and Mandarin Buns",
    image: require("../../assets/image/base/tred2.jpg")
  },
  {
    id: "2",
    recipeName: "Coconut Pound Cake",
    image: require("../../assets/image/base/tred5.jpeg")
  },
  {
    id: "3",
    recipeName: "Cardamom and Cranberry ",
    image: require("../../assets/image/base/tred3.jpeg")
  },
  {
    id: "4",
    recipeName: "Clam chowder",
    image: require("../../assets/image/base/tred1.jpg")
  },
  {
    id: "5",
    recipeName: "Sauted Orange & Mustard",
    image: require("../../assets/image/base/tred4.jpg")
  }
];

const recommended = [
  {
    id: "1",
    recipeName: "French Fries",
    image: require("../../assets/image/base/rec1.jpg")
  },
  {
    id: "2",
    recipeName: "Empanadas Dumplings",
    image: require("../../assets/image/base/rec4.jpg")
  },
  {
    id: "3",
    recipeName: "Pancake",
    image: require("../../assets/image/base/rec5.jpg")
  },
  {
    id: "4",
    recipeName: "Clam chowder",
    image: require("../../assets/image/base/tred1.jpg")
  }
];

const recipeList = [
  {
    id: "1",
    tag: ["Recipes", "Save"],
    recipeName: "French Fries",
    image: require("../../assets/image/base/rec1.jpg")
  },
  {
    id: "2",
    tag: ["Recipes"],
    recipeName: "Empanadas Dumplings",
    image: require("../../assets/image/base/rec4.jpg")
  },
  {
    id: "3",
    tag: ["Recipes", "Save"],
    recipeName: "Pancake",
    image: require("../../assets/image/base/rec5.jpg")
  },
  {
    id: "4",
    tag: ["Recipes"],
    recipeName: "Clam chowder",
    image: require("../../assets/image/base/tred1.jpg")
  },
  {
    id: "5",
    tag: ["Recipes"],
    recipeName: "Banana and Mandarin Buns",
    image: require("../../assets/image/base/tred2.jpg")
  },
  {
    id: "6",
    tag: ["Following"],
    recipeName: "Coconut Pound Cake",
    image: require("../../assets/image/base/tred5.jpeg")
  },
  {
    id: "7",
    tag: ["Save"],
    recipeName: "Cardamom and Cranberry ",
    image: require("../../assets/image/base/tred3.jpeg")
  },
  {
    id: "8",
    tag: ["Recipes", "Save"],
    recipeName: "Clam chowder",
    image: require("../../assets/image/base/tred1.jpg")
  },
  {
    id: "9",
    tag: ["Recipes", "Following"],
    recipeName: "Sauted Orange & Mustard",
    image: require("../../assets/image/base/tred4.jpg")
  }
];

export { recipe, trending, recommended, recipeList };
