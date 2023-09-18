import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continous-improvement-add-data',
  templateUrl: './continous-improvement-add-data.component.html',
  styleUrls: ['./continous-improvement-add-data.component.scss']
})
export class ContinousImprovementAddDataComponent {

    constructor(private router:Router){}

    forBack(){
      this.router.navigate(['/continous/improvement'])
    }
}
