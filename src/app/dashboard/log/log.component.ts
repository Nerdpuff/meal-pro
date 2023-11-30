import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Log } from './log';
import { CalendarService } from 'src/app/shared/calendar.service';
import { isSameDay } from 'date-fns';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  protected todaysLog: Log | undefined;

  constructor(
    private dataService: DataService,
    private calenderService: CalendarService
  ) {
    this.dataService.data$.subscribe((data) => {
      this.todaysLog = data.find((x) =>
        isSameDay(x.date, this.calenderService.selectedDate$.getValue())
      );
    });

    this.calenderService.selectedDate$.subscribe((date) => {
      this.todaysLog = this.dataService.data$.value.find((x) =>
        isSameDay(x.date, date)
      );
    });
  }
}
