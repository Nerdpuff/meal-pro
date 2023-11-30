import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { CalendarService } from 'src/app/shared/calendar.service';
import { BehaviorSubject } from 'rxjs';
import { Meal } from './log';
import { isSameDay } from 'date-fns';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  todaysMeals: BehaviorSubject<Meal[]> = new BehaviorSubject<Meal[]>([]);

  constructor(
    private dataService: DataService,
    protected calenderService: CalendarService
  ) {
    this.dataService.data$.subscribe((data) => {
      const todaysMeals = data.find((x) =>
        isSameDay(x.date, this.calenderService.selectedDate$.getValue())
      );

      if (todaysMeals) {
        this.todaysMeals.next(todaysMeals.meals);
      }
    });

    this.calenderService.selectedDate$.subscribe((date) => {
      const todaysMeals = this.dataService.getMealsForDate(date);

      if (todaysMeals) {
        this.todaysMeals.next(todaysMeals.meals);
      } else {
        this.todaysMeals.next([]);
      }
    });
  }
}
