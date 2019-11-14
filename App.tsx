import React from "react";
import { theme, Colors, Fonts } from "./src/theme";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { InstrumentDetail } from "./src/pages/InstrumentDetail";
import { InstrumentList } from "./src/pages/InstrumentList";
import { Pages } from "./src/util/types";
import { AppProvider } from "./src/contexts/AppContext";
import { SafeAreaView } from "react-native";


const MainNavigator = createStackNavigator(
  {
    [Pages.InstrumentList]: {
      screen: InstrumentList,
      navigationOptions: { title: "Home" }
    },
    [Pages.InstrumentDetail]: {
      screen: InstrumentDetail,
      navigationOptions: { title: "Detail" }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.screen.container.backgroundColor
      },
      headerTintColor: Colors.BitmexBlue,
      headerTitleStyle: {
        fontWeight: "800",
        fontSize: Fonts.Large,
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

const ProvidedApp = () => {
  return (
    <AppProvider>
      <SafeAreaView style={{ backgroundColor: "rgba(60,50,40,0.3", flex: 1 }}>
        <App />
      </SafeAreaView>
    </AppProvider>
  );
};

export default ProvidedApp;
