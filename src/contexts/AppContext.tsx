import React, { useEffect, useState } from "react";
import { Instrument, User, InstrumentId } from "../util/types";
import { defaultInstruments, defaultUser } from "../util/defaults";
import _ from "lodash";

// FUN: randomly jitter data to simulate changes?
const doJitterData = true;
export interface AppContextState {
  instruments: Array<Instrument>;
  toggleIsFavorite: (InstrumentId) => void;
  currUser: User;
}

export const AppContext = React.createContext({} as AppContextState);

export const AppProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [instruments, setInstruments] = useState(defaultInstruments);
  const [currUser, setCurrUser] = useState<User>(defaultUser);

  const toggleIsFavorite = (id: InstrumentId) => {
    const newFavorites = _.xor(currUser.favoriteInstruments, [id]);
    setCurrUser({ ...currUser, favoriteInstruments: newFavorites });
  };

  const loadInstruments = () => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(responseJson => {
        // Hack for display purposes only :-D

        const newInstruments = doJitterData
          ? responseJson.map(inst => ({
              ...inst,
              dailyVolume: inst.dailyVolume * (1 + Math.random() / 5000),
              dailyChange: inst.dailyChange * (1.0 + Math.random() / 100)
            }))
          : responseJson;
        setInstruments(newInstruments);
      })
      .catch(err => {
        console.warn(`Error: ${err}`);
      });
  };

  useEffect(() => {
    loadInstruments();
    const timerId = setInterval(loadInstruments, 10);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        instruments,
        currUser,
        toggleIsFavorite
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
