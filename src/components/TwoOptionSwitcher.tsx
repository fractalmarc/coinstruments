import React from "react";
import { theme } from "../theme";

import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { Pages } from "../util/types";
interface TwoOptionSwitcherProps {
  option1: string;
  option2: string;
  currentOption: number;
  setCurrentOption: (opt: number) => void;
}

export const TwoOptionSwitcher = (props: TwoOptionSwitcherProps) => {
  const isOption1 = props.currentOption === 0;
  const isOption2 = props.currentOption === 1;
  return (
    <View style={theme.twoOptionSwitcher.container}>
      <TouchableOpacity
        onPress={() => props.setCurrentOption(0)}
        style={[
          theme.twoOptionSwitcher.basicOptionStyle,
          isOption1 && theme.twoOptionSwitcher.selectedOptionStyle
        ]}
      >
        <Text
          style={[
            theme.twoOptionSwitcher.label,
            isOption1 && theme.twoOptionSwitcher.labelSelected
          ]}
        >
          {props.option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setCurrentOption(1)}
        style={[
          theme.twoOptionSwitcher.basicOptionStyle,
          isOption2 && theme.twoOptionSwitcher.selectedOptionStyle
        ]}
      >
        <Text
          style={[
            theme.twoOptionSwitcher.label,
            isOption2 && theme.twoOptionSwitcher.labelSelected
          ]}
        >
          {props.option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
