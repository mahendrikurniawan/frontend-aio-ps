import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-daily',
  templateUrl: './report-daily.component.html',
  styleUrls: ['./report-daily.component.scss']
})
export class ReportDailyComponent {
  constructor(private router : Router) {}

  addData(){
    this.router.navigate(['/report/daily/add-data'])
  }
}
