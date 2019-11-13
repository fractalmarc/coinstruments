import React from "react";
import { Instrument } from "../util/types";
import { formatDailyChange, formatCurrency } from "../util/index";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface InstrumentCardProps {
  onPress: () => void;
  instrument: Instrument;
}
export const InstrumentCard: React.FunctionComponent<InstrumentCardProps> = ({
  onPress,
  instrument
}) => {
  const directionalColor = instrument.dailyChange >= 0 ? "green" : "red";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Text style={styles.instrumentName}>{instrument.name}</Text>
        <View style={styles.detailRow}>
          <Text style={{ ...styles.instrumentName, width: "60%" }}>
            Volume: {formatCurrency(instrument.dailyVolume)}
          </Text>
          <Text
            style={{
              ...styles.instrumentName,
              width: "40%",
              color: directionalColor
            }}
          >
            {formatDailyChange(instrument.dailyChange)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const fontSize = 16;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "blue",
    alignSelf: "stretch",
    margin: fontSize,
    padding: fontSize
  },
  detailRow: {
    flexDirection: "row",
    paddingTop: fontSize * 2
  },
  instrumentName: {
    color: "white"
  }
});
