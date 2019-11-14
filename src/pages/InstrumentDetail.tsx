import React, { useContext } from "react";
import { theme, Fonts, Colors } from "../theme";
import { formatCurrency, formatDailyChange, colorForChange } from "../util";

import { View, Text, StyleSheet, Switch } from "react-native";
import { AppContext } from "../contexts/AppContext";
import { useNavigation } from "react-navigation-hooks";

export const InstrumentDetail = ({ setIsFavorite }) => {
  const navigation = useNavigation();
  const { currInstrument, currUser, toggleIsFavorite } = useContext(AppContext);
  const leftColPercent = "50%";
  const rightColPercent = "50%";
  const valueFontWeight = "700";

  return (
    <View style={theme.screen.container}>
      <View style={theme.instrumentCard.container}>
        <Text style={theme.instrumentCard.cardTitle}>
          {currInstrument.name}
        </Text>
        <View style={theme.instrumentCard.detailRow}>
          <Text
            style={{
              ...theme.instrumentCard.cardContent,
              width: leftColPercent
            }}
          >
            Volume:
          </Text>
          <Text
            style={{
              ...theme.instrumentCard.cardContent,
              fontWeight: valueFontWeight,
              width: rightColPercent
            }}
          >
            {formatCurrency(currInstrument.dailyVolume)}
          </Text>
        </View>
        <View style={theme.instrumentCard.detailRow}>
          <Text
            style={{
              ...theme.instrumentCard.cardContent,
              width: leftColPercent
            }}
          >
            Daily Change:
          </Text>
          <Text
            style={{
              ...theme.instrumentCard.cardContent,
              fontWeight: valueFontWeight,
              width: rightColPercent,
              color: colorForChange(currInstrument.dailyChange)
            }}
          >
            {formatDailyChange(currInstrument.dailyChange)}
          </Text>
        </View>
        <View style={theme.instrumentCard.detailRow}>
          <Text
            style={{
              ...theme.instrumentCard.cardContent,
              width: leftColPercent
            }}
          >
            Favorite?
          </Text>
          <View style={{ width: rightColPercent }}>
            <Switch
              trackColor={{
                false: Colors.HeaderTitle,
                true: Colors.White
              }}
              ios_backgroundColor={Colors.HeaderTitle}
              thumbColor={Colors.BitmexBlue}
              value={currUser.favoriteInstruments.includes(currInstrument.name)}
              onValueChange={() => toggleIsFavorite(currInstrument.name)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
