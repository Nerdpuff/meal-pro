import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Log, MealType } from './log';
import { CalendarService } from 'src/app/shared/calendar.service';
import { isSameDay } from 'date-fns';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  todaysLog: Log = {
    date: new Date(),
    meals: [],
  };

  constructor(
    private dataService: DataService,
    private calenderService: CalendarService
  ) {
    this.dataService.data$.subscribe((data) => {
      const log = data.find((x) =>
        isSameDay(x.date, this.calenderService.selectedDate$.value)
      );

      if (log) {
        this.todaysLog = log;
      }
    });
  }
}
