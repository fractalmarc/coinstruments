import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { Pages } from "../util/types";
interface TwoOptionSwitcherProps {
  option1: string;
  option2: string;
  currentOption: number;
  setCurrentOption: (number) => void;
}

export const TwoOptionSwitcher = (props: TwoOptionSwitcherProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(Pages.Modal);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "stretch",
        padding: 16,
        margin: 16
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "50%",
          backgroundColor: "red",
          alignContent: "center"
        }}
      >
        <Text>{props.option1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={{ width: "50%", backgroundColor: "blue", alignItems: "center" }}
      >
        <Text>{props.option2}</Text>
      </TouchableOpacity>
    </View>
  );
};
