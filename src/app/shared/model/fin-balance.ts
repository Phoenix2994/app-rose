import { Incomes } from './incomes';
import { Outings } from './outings';

export interface FinBalance {
  teamValue: number;
  leagueExpense: number;
  paidLeagueExpense: number;
  annualBalance: number;
  totalBalance: number;
  incomes: Incomes;
  outings: Outings;
}
