import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-daily-add-data',
  templateUrl: './report-daily-add-data.component.html',
  styleUrls: ['./report-daily-add-data.component.scss']
})
export class ReportDailyAddDataComponent {
  constructor(private router:Router) {}

  forBack() {
    console.log('forBack() dipanggil');
    this.router.navigate(['/report/daily']);
  }
}
