const colors = {
  primary: "#30BE76",
  secondary: "#F84970",
  accent: "#D6F2E4",
  tertiary: "#F8B449",
  black: "#030f09",
  white: "#FFFFFF",
  caption: "#A8A8A8",
  border: "#30be76",
  gray: "#767676",
  gray2: "#cccccc",
  gray3: "#e6e6e6",
  body: "#606060",
  activeColor: "#30BE76",
  inActiveColor: "#030f09"
};

const sizes = {
  //-- Global
  base: 16,
  padding: 20,
  font: 14,
  radius: 8,
  border: 1,
  //-- Font Size
  h1: 40,
  h2: 32,
  h3: 23,
  h4: 18,
  tittle: 20,
  button: 16,
  header: 14,
  caption: 12,
  small: 9,
  body: 14,
  item: 18,
  btnHight: 50,
  iconSize: 32
};
const fontFamily = {
  regular: "Nunito-Regular",
  light: "Nunito-Light ",
  bold: "Nunito-Bold",
  semiBold: "Nunito-SemiBold",
  medium: "Nunito-Black"
};

const fonts = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: sizes.h1,
    fontWeight: "700"
  },
  h2: {
    fontFamily: fontFamily.medium,
    fontSize: sizes.h2
  },
  h3: {
    fontFamily: fontFamily.regular,
    fontSize: sizes.h3,
    fontWeight: "400"
  },
  h4: {
    fontFamily: fontFamily.semiBold,
    fontSize: sizes.h4,
    fontWeight: "600"
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: sizes.caption,
    fontWeight: "400",
    color: colors.caption
  },
  small: {
    fontSize: sizes.small
  },
  header: {
    fontFamily: fontFamily.semiBold,
    fontSize: sizes.header,
    fontWeight: "600"
  },
  light: {
    fontFamily: fontFamily.regular,
    fontSize: sizes.body,
    fontWeight: "400",
    lineHeight: 22
  }
};


export { colors, sizes, fonts, fontFamily };
