import { Incomes } from './incomes';
import { Outings } from './outings';

export interface SeasonBalance {
  season: string;
  teamValue: number;
  leagueExpense: number;
  paidLeagueExpense: number;
  annualBalance: number;
  incomes: Incomes;
  outings: Outings;
}
