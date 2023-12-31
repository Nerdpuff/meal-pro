import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { CalendarService } from 'src/app/shared/services/calendar.service';
import { BehaviorSubject } from 'rxjs';
import { Meal } from './log';
import { isSameDay } from 'date-fns';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  todaysMeals: BehaviorSubject<Meal[]> = new BehaviorSubject<Meal[]>([]);

  constructor(
    private dataService: DataService,
    protected calenderService: CalendarService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params) => {
      if (params['date']) {
        const date = new Date(params['date']);
        calenderService.setDate(date);
      }
    });

    this.dataService.data$.subscribe((data) => {
      const todaysMeals = data.find((x) =>
        isSameDay(x.date, this.calenderService.selectedDate)
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
