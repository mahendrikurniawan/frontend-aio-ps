import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sec-menu',
  templateUrl: './sec-menu.component.html',
  styleUrls: ['./sec-menu.component.scss']
})
export class SecMenuComponent implements OnInit {
  attribute: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {

    
  }

  changeLayout(layout: string) {
    // this.attribute = window.localStorage.getItem('layout');
    // // this.attribute = layout;
    if (layout == 'horizontal') {
      this.eventService.broadcast('changeLayout', 'vertical');
    } else {
      this.eventService.broadcast('changeLayout', layout);
    }
    document.documentElement.setAttribute('data-layout', layout);
    document.body.setAttribute('layout', layout);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

  onMaintClick() {
    sessionStorage.setItem("subCategory", "maintenance")
    this.router.navigate(['/gateway'])
  }
}
