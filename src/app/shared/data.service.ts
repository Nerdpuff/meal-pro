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

  getDaysLogged(): number {
    return this.logData.getValue().length;
  }

  getHighestCalorieDate(): Log {
    const data = this.logData.getValue();
    const highestCalorieDate = data.reduce((prev, curr) => {
      const prevTotal = prev.meals.reduce(
        (prevTotal, currMeal) =>
          prevTotal +
          currMeal.foods.reduce(
            (prevMealTotal, currFood) => prevMealTotal + currFood.calories,
            0
          ),
        0
      );
      const currTotal = curr.meals.reduce(
        (prevTotal, currMeal) =>
          prevTotal +
          currMeal.foods.reduce(
            (prevMealTotal, currFood) => prevMealTotal + currFood.calories,
            0
          ),
        0
      );
      return prevTotal > currTotal ? prev : curr;
    });
    return highestCalorieDate;
  }

  getAverageCaloriesPerDay(): number {
    const data = this.logData.getValue();
    const totalCalories = data.reduce((prev, curr) => {
      const currTotal = curr.meals.reduce(
        (prevTotal, currMeal) =>
          prevTotal +
          currMeal.foods.reduce(
            (prevMealTotal, currFood) => prevMealTotal + currFood.calories,
            0
          ),
        0
      );
      return prev + currTotal;
    }, 0);
    return totalCalories / data.length;
  }

  getLowestCalorieDate(): Log {
    const data = this.logData.getValue();
    const lowestCalorieDate = data.reduce((prev, curr) => {
      const prevTotal = prev.meals.reduce(
        (prevTotal, currMeal) =>
          prevTotal +
          currMeal.foods.reduce(
            (prevMealTotal, currFood) => prevMealTotal + currFood.calories,
            0
          ),
        0
      );
      const currTotal = curr.meals.reduce(
        (prevTotal, currMeal) =>
          prevTotal +
          currMeal.foods.reduce(
            (prevMealTotal, currFood) => prevMealTotal + currFood.calories,
            0
          ),
        0
      );
      return prevTotal < currTotal ? prev : curr;
    });
    return lowestCalorieDate;
  }

  getLog(date: Date): Log {
    const data = this.logData.getValue();
    const log = data.find(
      (x) =>
        x.date.getFullYear() === date.getFullYear() &&
        x.date.getMonth() === date.getMonth() &&
        x.date.getDate() === date.getDate()
    );
    return log || { date, meals: [] };
  }

  getMealsForDate(date: Date): Log {
    const data = this.logData.getValue();
    const log = data.find(
      (x) =>
        x.date.getFullYear() === date.getFullYear() &&
        x.date.getMonth() === date.getMonth() &&
        x.date.getDate() === date.getDate()
    );
    return log || { date, meals: [] };
  }

  addLog(log: Log): void {
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
