import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Forms' },
      { label: 'Form Layout', active: true }
    ];
  }

  /**
   * Show Code Toggle
   */
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

}