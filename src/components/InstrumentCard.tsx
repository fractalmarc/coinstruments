import React from "react";
import { theme, Fonts, Colors } from "../theme";
import { Instrument } from "../util/types";
import {
  formatDailyChange,
  formatCurrency,
  colorForChange
} from "../util/index";
import { Text, View, StyleSheet, TouchableOpacity, Switch } from "react-native";

interface InstrumentCardProps {
  onPress: () => void;
  instrument: Instrument;
}
export const InstrumentCard: React.FunctionComponent<InstrumentCardProps> = ({
  onPress,
  instrument
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={theme.instrumentCard.container}>
        <Text style={theme.instrumentCard.cardTitle}>{instrument.name}</Text>
        <View style={theme.instrumentCard.detailRow}>
          <Text style={{ ...theme.instrumentCard.cardContent, width: "70%" }}>
            Volume: {formatCurrency(instrument.dailyVolume)}
          </Text>
          <Text
            style={{
              ...theme.instrumentCard.cardContent,
              width: "30%",
              color: colorForChange(instrument.dailyChange),
              textAlign: "right"
            }}
          >
            {formatDailyChange(instrument.dailyChange)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
