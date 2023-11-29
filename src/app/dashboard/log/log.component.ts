import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Log } from './log';
import { CalendarService } from 'src/app/shared/calendar.service';

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
    this.calenderService.selectedDate$.subscribe((date) => {
      this.todaysLog = this.dataService.getLogsByDate(date);
    });
  }
}
