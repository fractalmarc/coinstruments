import React, { useContext, ReactElement, ReactNode } from "react";
import { theme, Colors } from "../theme";
import { formatCurrency, formatDailyChange, colorForChange } from "../util";

import { View, Text, Switch, TextStyle } from "react-native";
import { AppContext } from "../contexts/AppContext";
import { useNavigation } from "react-navigation-hooks";

interface LabeledValueRowProps {
  additionalValueTextStyles?: TextStyle;
  labelText: string;
  valueText?: string;
  valueComponent?: React.ReactNode;
}

const LabeledValueRow = (props: LabeledValueRowProps) => {
  const leftColPercent = "55%";
  const rightColPercent = "45%";
  const valueFontWeight = "700";
  return (
    <View style={theme.instrumentCard.detailRow}>
      <Text
        style={{
          ...theme.instrumentCard.cardContent,
          width: leftColPercent
        }}
      >
        {props.labelText}
      </Text>
      {props.valueComponent || (
        <Text
          style={{
            ...theme.instrumentCard.cardContent,
            fontWeight: valueFontWeight,
            width: rightColPercent,
            ...props.additionalValueTextStyles
          }}
        >
          {props.valueText}
        </Text>
      )}
    </View>
  );
};

export const InstrumentDetail = () => {
  const { currUser, instruments, toggleIsFavorite } = useContext(AppContext);
  const currInstrumentId = useNavigation().getParam("instrumentId");
  const currInstrument = instruments.find(i => i.name === currInstrumentId);

  const ToggleFavoriteSwitch = (
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
  );

  return (
    <View style={theme.screen.container}>
      <View style={theme.instrumentCard.container}>
        <Text style={theme.instrumentCard.cardTitle}>
          {currInstrument.name}
        </Text>
        <LabeledValueRow
          labelText="Volume:"
          valueText={formatCurrency(currInstrument.dailyVolume)}
        />
        <LabeledValueRow
          labelText="Daily Change:"
          valueText={formatDailyChange(currInstrument.dailyChange)}
          additionalValueTextStyles={{
            color: colorForChange(currInstrument.dailyChange)
          }}
        />
        <LabeledValueRow
          labelText="Favorite:"
          valueComponent={ToggleFavoriteSwitch}
        />
      </View>
    </View>
  );
};
