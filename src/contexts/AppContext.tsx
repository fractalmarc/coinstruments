import React, { useEffect, useState } from "react";
import { Instrument, User, InstrumentId } from "../util/types";
import { defaultInstruments, defaultUser } from "../util/defaults";
import _ from "lodash";

export interface AppContextState {
  instruments: Array<Instrument>;
  currInstrument: Instrument;
  setCurrInstrument: (Instrument) => void;
  toggleIsFavorite: (InstrumentId) => void;
  currUser: User;
}

export const AppContext = React.createContext({} as AppContextState);

export const AppProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [instruments, setInstruments] = useState(defaultInstruments);
  const [currInstrument, setCurrInstrument] = useState({} as Instrument);
  const [currUser, setCurrUser] = useState<User>(defaultUser);

  const toggleIsFavorite = (id: InstrumentId) => {
    const newFavorites = _.xor(currUser.favoriteInstruments, [id]);
    setCurrUser({ ...currUser, favoriteInstruments: newFavorites });
  };

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(responseJson => {
        // TODO: validate data
        setInstruments(responseJson);
      })
      .catch(err => {
        console.warn(`Error: ${err}`);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        instruments,
        currInstrument,
        setCurrInstrument,
        currUser,
        toggleIsFavorite
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
