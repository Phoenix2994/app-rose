import { FinBalance } from './fin-balance';
import { Player } from './player';

export interface Team {
  players: Player[];
  youth: Player[];
  borrowed: Player[];
  name: string;
  teamId: number;
  finBalance: FinBalance;
}
