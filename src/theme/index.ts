import { StyleSheet } from "react-native";

export const Colors = {
  BitmexRed: "rgba(235, 51, 36, 1)",
  BitmexBlue: "rgba(37, 95, 246, 1)",
  BitmexYellow: "rgba(238, 172, 92, 1)",
  White: "#fff",
  Black: "#000",
  HeaderTitle: "#888888", // official fav color of Hong Kong
  PrimaryCTAGreen: "rgba(70, 155, 49, 1)",
  PrimaryCTAHover: "rgba(50, 120, 30, 0.9)",
  SecondaryCTA: "rgba(8, 64, 236, 1)",
  HodlGreen: "green",
  RektRed: "red"
};

export const Fonts = {
  Small: 16,
  Medium: 20,
  Large: 24,
  XLarge: 32
};

const fontSymmetryConstant = Fonts.Large;

export interface Theme {
  [themable: string]: StyleSheet.NamedStyles<any>;
}

export const theme1: Theme = {
  screen: {
    container: {
      flex: 1,
      backgroundColor: Colors.Black,
      padding: fontSymmetryConstant
    },
    header: {
      color: Colors.BitmexRed
    }
  },
  instrumentCard: {
    container: {
      backgroundColor: Colors.BitmexYellow,
      alignSelf: "stretch",
      margin: fontSymmetryConstant,
      padding: fontSymmetryConstant,
      borderRadius: fontSymmetryConstant
    },
    detailRow: {
      flexDirection: "row",
      paddingTop: fontSymmetryConstant * 2
    },
    cardTitle: {
      fontSize: Fonts.Medium,
      fontWeight: "600",
      color: Colors.HeaderTitle
    },
    cardContent: {
      fontSize: Fonts.Small,
      color: Colors.White,
      fontWeight: "500"
    }
  },
  instrumentDetail: {
    detailRow: {
      flexDirection: "row",
      //   flexBasis: 2,
      paddingTop: fontSymmetryConstant * 2
    }
  },
  twoOptionSwitcher: {
    container: {
      flexDirection: "row",
      alignSelf: "stretch",
      height: fontSymmetryConstant * 4,
      padding: fontSymmetryConstant
    },
    basicOptionStyle: {
      width: "50%",
      backgroundColor: Colors.PrimaryCTAHover,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    selectedOptionStyle: {
      borderWidth: 1,
      borderColor: Colors.BitmexYellow,
      backgroundColor: Colors.PrimaryCTAGreen
    },
    label: {
      fontSize: Fonts.Medium,
      color: Colors.White,
      fontWeight: "400"
    },
    labelSelected: {
      fontWeight: "600"
    }
  }
};

export const theme = theme1; // TODO: enable multiple themes
