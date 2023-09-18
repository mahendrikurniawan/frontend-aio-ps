import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-preventive-master-plan',
  templateUrl: './preventive-master-plan.component.html',
  styleUrls: ['./preventive-master-plan.component.scss'],
})
export class PreventiveMasterPlanComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {

    localStorage.setItem('layout', 'vertical');
    
    this.applyVerticalLayout();
    
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'Basic Tables', active: true }
    ];
  }
  ShowCode(event: any) {
    let card = event.target.closest('.card');
    const preview = card.children[1].children[1];
    const codeView = card.children[1].children[2];
    if (codeView != null) {
      codeView.classList.toggle('d-none');
    }
    if (preview != null) {
      preview.classList.toggle('d-none');

    }
  }
  addData() {
    this.router.navigate(['/addData']);
  }
  applyVerticalLayout() {
    const storedLayout = localStorage.getItem('layout');
    if (storedLayout === 'horizontal') {
      this.eventService.broadcast('changeLayout', 'vertical');
    } else if (typeof storedLayout === 'string') {
    }
  }
}
