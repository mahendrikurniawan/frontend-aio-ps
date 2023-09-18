import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-monthly',
  templateUrl: './report-monthly.component.html',
  styleUrls: ['./report-monthly.component.scss']
})
export class ReportMonthlyComponent {
  constructor(private router:Router){}

  addData(){
    this.router.navigate(['/continous/weekly/add-data'])
  }
}