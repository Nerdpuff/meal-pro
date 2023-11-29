import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Log } from './log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  public logs: Log[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      this.logs = data;
    });
  }
}
