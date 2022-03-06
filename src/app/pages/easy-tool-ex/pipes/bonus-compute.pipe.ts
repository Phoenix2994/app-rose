import { Pipe, PipeTransform } from '@angular/core';
import { Bonus } from '../model/bonus';

@Pipe({
  name: 'bonusCompute',
})
export class BonusComputePipe implements PipeTransform {
  transform(value: Bonus[], ...args: unknown[]): number {
    let totalBonus = 0;
    value.forEach((bonus) => {
      totalBonus += this.getBonus(bonus);
    });
    return totalBonus;
  }

  getBonus(bonus: Bonus): number {
    if (bonus.targetResult) {
      if (bonus.targetResult === true) {
        return bonus.reward;
      } else {
        bonus.reward * bonus.targetResult;
      }
    }
    return 0;
  }
}
