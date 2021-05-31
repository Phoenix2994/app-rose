import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
})
export class RolePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.includes('-')) {
      return value.split('-')[1];
    } else {
      return value;
    }
  }
}
