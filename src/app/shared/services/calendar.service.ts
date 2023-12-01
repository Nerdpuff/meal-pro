import { Injectable } from '@angular/core';
import { add, eachDayOfInterval } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private _selectedDate = new BehaviorSubject(new Date());
  selectedDate$ = this._selectedDate.asObservable();
  get selectedDate(): Date {
    return this._selectedDate.getValue();
  }

  private _calendarDates = new BehaviorSubject(
    this.getCalendarDates(this._selectedDate.value)
  );
  calendarDates$ = this._calendarDates.asObservable();
  get calendarDates(): Date[] {
    return this._calendarDates.getValue();
  }

  constructor() {
    this._selectedDate.subscribe((date) => {
      this._calendarDates.next(this.getCalendarDates(date));
    });
  }

  public setDate(date: Date) {
    this._selectedDate.next(date);
  }

  public selectDate(date: Date) {
    this._selectedDate.next(date);
  }

  private getCalendarDates(date: Date) {
    const startDate = add(date, { days: -3 });
    const endDate = add(date, { days: 3 });

    return eachDayOfInterval({ start: startDate, end: endDate });
  }
}
