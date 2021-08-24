export interface Award {
  season: string;
  awards: {
    position: string;
    perc: number;
    value: number;
  }[];
  fines: {
    aliquot: number;
    percLimit: number;
    moneyLimit: number;
  }[];
}
