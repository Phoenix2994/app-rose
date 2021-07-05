import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutLongName',
})
export class CutLongName implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return (value && value.length) > 20 ? value.slice(0, 20) + '..' : value;
  }
}
