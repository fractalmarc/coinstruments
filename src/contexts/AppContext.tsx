import React, { useEffect, useState } from "react";
import { Instrument } from "../util/types";

export interface AppContextState {
  instruments: Array<Instrument>;
  currInstrument: Instrument;
  setCurrInstrument: (Instrument) => void;
}

export const AppContext = React.createContext({} as AppContextState);

export const AppProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [instruments, setInstruments] = useState([] as Array<Instrument>);
  const [currInstrument, setCurrInstrument] = useState({} as Instrument);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(responseJson => {
        // TODO: validate data
        setInstruments(responseJson);
      })
      .catch(err => {
        // console.warn(`Error: ${err}`);
      });
  }, []);
  return (
    <AppContext.Provider
      value={{
        instruments,
        currInstrument,
        setCurrInstrument
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
