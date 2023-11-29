import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogComponent } from './dashboard/log/log.component';
import { QuickAddComponent } from './dashboard/quick-add/quick-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaloriesPipe } from './shared/calories.pipe';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { ThemeComponent } from './theme/theme.component';
import { MealSummaryPipe } from './meal-summary.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogComponent,
    QuickAddComponent,
    CaloriesPipe,
    CalendarComponent,
    ThemeComponent,
    MealSummaryPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
