import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent, title: 'Dashboard' },
  { path: 'dash/:date', component: DashboardComponent, title: 'Dashboard' },
  { path: 'analytics', component: AnalyticsComponent, title: 'Analytics' },
  { path: '**', redirectTo: 'dash' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
