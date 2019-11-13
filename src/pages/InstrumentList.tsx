import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { Pages, Instrument } from "../util/types";
import { AppContext } from "../contexts/AppContext";
import { InstrumentCard } from "../components/InstrumentCard";
import { TwoOptionSwitcher } from "../components/TwoOptionSwitcher";
import { ScrollView } from "react-native-gesture-handler";

export const InstrumentList = () => {
  const navigation = useNavigation();
  const { instruments, setCurrInstrument } = useContext(AppContext);
  const [showFavorites, setShowFavorites] = useState(false);

  const loadInstrument = (instrument: Instrument) => {
    //TODO: fixme
    console.warn(`Setting instrument to ${instrument.name}`);
    setCurrInstrument(instrument);
    navigation.navigate(Pages.InstrumentDetail);
  };

  const setShowFavoriteOption = (option: number) => {
    setShowFavorites(option === 1 ? true : false);
  };
  const filtered = showFavorites
    ? instruments.filter(inst => inst.isFavorite)
    : instruments;
  const ordered = filtered.sort((a, b) => b.dailyVolume - a.dailyVolume);

  return (
    <View>
      <TwoOptionSwitcher
        option1="All"
        option2="Favorites"
        currentOption={showFavorites ? 1 : 0}
        setCurrentOption={setShowFavoriteOption}
      />
      <Text>InstrumentList</Text>
      <ScrollView>
        {ordered.map(instrument => (
          <InstrumentCard
            key={instrument.name}
            onPress={() => loadInstrument(instrument)}
            instrument={instrument}
          />
        ))}
      </ScrollView>
    </View>
  );
};
