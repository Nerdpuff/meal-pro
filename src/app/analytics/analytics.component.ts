import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {
  constructor(protected dataService: DataService) {}
}
