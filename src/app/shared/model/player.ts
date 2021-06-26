import { Stats } from './stats';

export interface IPlayer {
  playerId: number;
  name: string;
  age: number;
  paymentValue: number;
  contractType: string;
  nextContractRenewal: number;
  nextPaymentValue: number;
  originQuot: number;
  quot: number;
  originValue: number;
  value: number;
  team: string;
  role: string;
  birthdate: string;
  height: string;
  nationality: string;
  roleDetail: string;
  mainFoot: string;
  img: string;
  stats: Stats[];
}
