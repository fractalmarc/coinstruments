import { Instrument, User, InstrumentId } from "./types";

export const defaultInstruments: Array<Instrument> = [
  {
    name: "BTC/USD",
    dailyChange: 0.0,
    dailyVolume: 0,
    markPrice: 0,
  }
];

export const defaultUser: User = {
  id: 1,
  name: "Default User",
  favoriteInstruments: [] as InstrumentId[]
};
