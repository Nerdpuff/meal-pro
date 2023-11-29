import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Log } from './log';
import { CalendarService } from 'src/app/shared/calendar.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  protected logs: Log[] = [];
  protected todaysLog: Log | undefined;

  constructor(
    private dataService: DataService,
    private calenderService: CalendarService
  ) {
    this.dataService.data$.subscribe((data) => {
      this.logs = data;
    });

    this.calenderService.selectedDate$.subscribe((date) => {
      this.todaysLog = this.dataService.getLogsByDate(date);
      console.debug('todays log', this.todaysLog);
    });
  }
}
