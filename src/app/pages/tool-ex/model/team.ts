import { Player } from './player';

export class Team {
  constructor(
    public players: Player[] = [],
    public finalPlayers: Player[] = [],
    public bonusList: number[] = [],
    public value: number = 0,
    public extra: number = 0,
    public bonus: number = 0,
    public repaid: number = 0,
    public finalValue: number = 0,
    public finalValueEval: number = 0,
    public quot: number = 0,
    public finalQuot: number = 0
  ) {}
}
