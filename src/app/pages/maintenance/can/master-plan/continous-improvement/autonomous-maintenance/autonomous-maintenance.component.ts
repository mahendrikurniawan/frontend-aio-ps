import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autonomous-maintenance',
  templateUrl: './autonomous-maintenance.component.html',
  styleUrls: ['./autonomous-maintenance.component.scss']
})
export class AutonomousMaintenanceComponent {
  constructor(private router : Router){}

  addData(){
    this.router.navigate(['/continous/autonomous/add-data'])
  }
}
