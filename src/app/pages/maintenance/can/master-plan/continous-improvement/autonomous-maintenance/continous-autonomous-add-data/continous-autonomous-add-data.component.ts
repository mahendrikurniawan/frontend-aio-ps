import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continous-autonomous-add-data',
  templateUrl: './continous-autonomous-add-data.component.html',
  styleUrls: ['./continous-autonomous-add-data.component.scss']
})
export class ContinousAutonomousAddDataComponent {
  constructor(private router:Router) {}

  forBack() {
    console.log('forBack() dipanggil');
    this.router.navigate(['/continous/auto-maintenance']);
  }
}
