import { Component } from '@angular/core';
import { isSameDay } from 'date-fns';
import add from 'date-fns/add';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  public selectedDate = new BehaviorSubject(new Date());
  protected calendarDates = new BehaviorSubject(
    this.getCalendarDates(this.selectedDate.value)
  );

  constructor() {
    this.selectedDate.subscribe((date) => {
      this.calendarDates.next(this.getCalendarDates(date));
    });
  }

  protected isSameDay(date1: Date, date2: Date) {
    return isSameDay(date1, date2);
  }

  protected selectDate(date: Date) {
    this.selectedDate.next(date);
  }

  protected getCalendarDates(date: Date) {
    const startDate = add(date, { days: -3 });
    const endDate = add(date, { days: 3 });

    return eachDayOfInterval({ start: startDate, end: endDate });
  }
}
