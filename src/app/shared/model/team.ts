import { FinBalance } from './fin-balance';
import { IPlayer } from './player';

export interface Team {
  players: IPlayer[];
  youth: IPlayer[];
  borrowed: IPlayer[];
  name: string;
  teamId: number;
  finBalance: FinBalance;
}
