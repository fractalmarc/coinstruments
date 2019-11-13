import React, { useContext } from "react";

import { View, Text, StyleSheet } from "react-native";
import { AppContext } from "../contexts/AppContext";
import { useNavigation } from "react-navigation-hooks";

export const InstrumentDetail = () => {
  const navigation = useNavigation();
  const { currInstrument } = useContext(AppContext);

//   const currInstrument = navigation.getParam("instrument", {});
  console.warn(`curr: ${Object.keys(currInstrument).length}`);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text>{currInstrument.name}</Text>
    </View>
  );
};
