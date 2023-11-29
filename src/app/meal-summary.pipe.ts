import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './dashboard/log/log';

@Pipe({
  name: 'mealSummary',
})
export class MealSummaryPipe implements PipeTransform {
  transform(value: Food[], ...args: unknown[]): number {
    return value.reduce((acc: number, curr: any) => {
      return acc + curr.calories;
    }, 0);
  }
}
