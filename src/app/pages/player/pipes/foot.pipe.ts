import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foot',
})
export class FootPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value === 'destro') {
      return 'Dx';
    } else if (value === 'sinistro') {
      return 'Sx';
    } else {
      return 'Dx, Sx';
    }
  }
}
