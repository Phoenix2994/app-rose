import { Stats } from './stats';

export interface Player {
  playerId: number;
  name: string;
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
