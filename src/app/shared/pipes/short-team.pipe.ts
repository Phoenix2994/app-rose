import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTeam',
})
export class ShortTeamPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value ? value.substring(0, 3).toUpperCase() : value;
  }
}
