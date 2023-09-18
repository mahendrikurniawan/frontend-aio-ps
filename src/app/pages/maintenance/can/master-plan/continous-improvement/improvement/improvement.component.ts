import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.scss']
})
export class ImprovementComponent {
  constructor( private router:Router ) {}
  
  addData(){
  this.router.navigate(['/continous/improvement/add-data'])
  }
}
