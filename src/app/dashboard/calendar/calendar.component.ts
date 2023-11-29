import { Component } from '@angular/core';
import { isSameDay } from 'date-fns';
import { CalendarService } from 'src/app/shared/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  private calenderService: CalendarService;
  public selectedDate: Date = new Date();
  public calendarDates: Date[] = [];

  constructor(calenderService: CalendarService) {
    this.calenderService = calenderService;

    calenderService.selectedDate$.subscribe((date) => {
      this.selectedDate = date;
    });

    calenderService.calendarDates$.subscribe((dates) => {
      this.calendarDates = dates;
    });
  }

  protected isSameDay(date1: Date, date2: Date) {
    return isSameDay(date1, date2);
  }

  protected selectDate(date: Date) {
    this.calenderService.selectDate(date);
  }
}
