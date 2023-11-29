import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calories',
})
export class CaloriesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} calories`;
  }
}
