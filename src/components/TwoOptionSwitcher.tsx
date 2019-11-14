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
interface SwitcherCellProps {
  onPress: () => void;
  label: string;
  isSelected: boolean;
}

const SwitcherCell = (props: SwitcherCellProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        theme.twoOptionSwitcher.basicOptionStyle,
        props.isSelected && theme.twoOptionSwitcher.selectedOptionStyle
      ]}
    >
      <Text
        style={[
          theme.twoOptionSwitcher.label,
          props.isSelected && theme.twoOptionSwitcher.labelSelected
        ]}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export const TwoOptionSwitcher = (props: TwoOptionSwitcherProps) => {
  return (
    <View style={theme.twoOptionSwitcher.container}>
      <SwitcherCell
        isSelected={props.currentOption === 0}
        label={props.option1}
        onPress={() => props.setCurrentOption(0)}
      />
      <SwitcherCell
        isSelected={props.currentOption === 1}
        label={props.option2}
        onPress={() => props.setCurrentOption(1)}
      />
    </View>
  );
};
