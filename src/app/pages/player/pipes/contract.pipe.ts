import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contract',
})
export class ContractPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value === 'TITOLO DEFINITIVO') {
      return 'DEF';
    } else if (value === 'PRESTITO (OBBLIGO)') {
      return 'PREST. (OBB)';
    } else if (value === 'PRESTITO (DIRITTO)') {
      return 'PREST. (DIR)';
    } else if (value === 'PRESTITO') {
      return 'PREST.';
    } else {
      return value;
    }
  }
}
