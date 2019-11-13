export enum Pages {
  InstrumentList = "InstrumentList",
  InstrumentDetail = "InstrumentDetail",
}

export interface Instrument {
  name: string;
  dailyVolume: number;
  dailyChange: number;
  markPrice: number;
  isFavorite: boolean;
}
