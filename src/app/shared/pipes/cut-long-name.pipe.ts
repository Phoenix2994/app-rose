import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutLongName',
})
export class CutLongName implements PipeTransform {
  transform(value: string, maxLength: number): string {
    return (value && value.length) > maxLength ? value.slice(0, maxLength) + '..' : value;
  }
}
