import { Injectable } from '@angular/core';
import { Log } from '../dashboard/log/log';
import { BehaviorSubject } from 'rxjs';
import { mockData } from 'src/mockData/logs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private logData = new BehaviorSubject<Log[]>([]);
  public data$ = this.logData.asObservable();

  constructor() {
    this.logData.next(mockData);
  }

  public addLog(log: Log): void {
    const currentData = this.logData.getValue();
    const existingDate = currentData.find(
      (x) =>
        x.date.getFullYear() === log.date.getFullYear() &&
        x.date.getMonth() === log.date.getMonth() &&
        x.date.getDate() === log.date.getDate()
    );
    if (existingDate) {
      const existingMealType = existingDate.meals.find(
        (x) => x.type === log.meals[0].type
      );
      if (existingMealType) {
        existingMealType.foods.push(log.meals[0].foods[0]);
      } else {
        existingDate.meals.push(log.meals[0]);
      }
    } else {
      currentData.push(log);
    }
    this.logData.next(currentData);
  }
}
