export class Bonus {
  constructor(
    public bonusType: string,
    public reward: number,
    public targetFlag: boolean,
    public target: number,
    public targetResult: number | boolean
  ) {}
}
