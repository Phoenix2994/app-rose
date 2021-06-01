import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contract',
})
export class ContractPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value === 'DEFINITIVO') {
      return 'DEF';
    } else if (value === 'PRESTITO (OBBLIGO)') {
      return 'PREST. (OBBLIGO)';
    } else if (value === 'PRESTITO (DIRITTO)') {
      return 'PREST. (DIRITTO)';
    } else if (value === 'PRESTITO') {
      return 'PREST.';
    } else {
      return value;
    }
  }
}
