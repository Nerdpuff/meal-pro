import { Injectable } from '@angular/core';
import { add, eachDayOfInterval } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  public selectedDate$ = new BehaviorSubject(new Date());
  public calendarDates$ = new BehaviorSubject(
    this.getCalendarDates(this.selectedDate$.value)
  );

  constructor() {
    this.selectedDate$.subscribe((date) => {
      this.calendarDates$.next(this.getCalendarDates(date));
    });
  }

  public selectDate(date: Date) {
    this.selectedDate$.next(date);
  }

  private getCalendarDates(date: Date) {
    const startDate = add(date, { days: -3 });
    const endDate = add(date, { days: 3 });

    return eachDayOfInterval({ start: startDate, end: endDate });
  }
}
