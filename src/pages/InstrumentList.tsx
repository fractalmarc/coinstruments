import React, { useContext, useState } from "react";
import { theme, Fonts, Colors } from "../theme";
import {
  View,
  FlatList
} from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { Pages, Instrument } from "../util/types";
import { AppContext } from "../contexts/AppContext";
import { InstrumentCard } from "../components/InstrumentCard";
import { TwoOptionSwitcher } from "../components/TwoOptionSwitcher";

export const InstrumentList = () => {
  const navigation = useNavigation();
  const [showFavorites, setShowFavorites] = useState(false);
  const { instruments, setCurrInstrument, currUser } = useContext(AppContext);

  const loadInstrument = (instrument: Instrument) => {
    setCurrInstrument(instrument);
    navigation.navigate(Pages.InstrumentDetail);
  };

  const filtered = showFavorites
    ? instruments.filter(inst =>
        currUser.favoriteInstruments.includes(inst.name)
      )
    : instruments;
  const ordered = filtered.sort((a, b) => b.dailyVolume - a.dailyVolume);

  return (
    <View style={theme.screen.container}>
      <TwoOptionSwitcher
        option1="All"
        option2="Favorites"
        currentOption={showFavorites ? 1 : 0}
        setCurrentOption={option => setShowFavorites(option === 1)}
      />
      <FlatList
        data={ordered}
        renderItem={({ item }) => (
          <InstrumentCard
            key={item.name}
            onPress={() => loadInstrument(item)}
            instrument={item}
          />
        )}
        keyExtractor={inst => inst.name}
      />
    </View>
  );
};
