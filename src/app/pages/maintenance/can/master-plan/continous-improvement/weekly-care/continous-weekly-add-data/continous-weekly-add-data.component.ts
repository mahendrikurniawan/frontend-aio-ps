import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continous-weekly-add-data',
  templateUrl: './continous-weekly-add-data.component.html',
  styleUrls: ['./continous-weekly-add-data.component.scss']
})
export class ContinousWeeklyAddDataComponent {
  constructor (private router:Router){}

  forBack(){
    this.router.navigate(['/continous/weekly-care'])
  }
}
