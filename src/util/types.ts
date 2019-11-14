export enum Pages {
  InstrumentList = "InstrumentList",
  InstrumentDetail = "InstrumentDetail",
}


// Unique ID identifying instrument
export type InstrumentId = string;

export interface Instrument {
  name: InstrumentId;
  dailyVolume: number;
  dailyChange: number;
  markPrice: number;
}

export interface User {
  id: number;
  name: string;
  favoriteInstruments: InstrumentId[];
}
