import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName',
})
export class FormatNamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value
      .toLowerCase()
      .split(/ /g)
      .map(
        (word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`
      )
      .join(' ');
  }
}
