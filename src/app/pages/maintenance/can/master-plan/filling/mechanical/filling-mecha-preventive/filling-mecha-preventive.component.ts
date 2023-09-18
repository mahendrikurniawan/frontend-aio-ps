import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilMechaPopupComponent } from './filling-mecha-popup/filling-mecha-popup.component';
import { RestApiService } from 'src/app/core/services/rest-api.service';
import { ActivityData } from './filling-mecha-preventive.model'

@Component({
  selector: 'app-preventive',
  templateUrl: './filling-mecha-preventive.component.html',
  styleUrls: ['./filling-mecha-preventive.component.scss']
})
export class FilMechaPreventiveComponent {
  tableColumns = ['No', 'Function Location', 'Operation Task', 'Description Material', 'Date', 'Details'];
  titlePage = 'Activity List';
  index: number = 0;
  activityData: any;

  @ViewChild('myModal') myModal: any; 

  constructor(private modalService: NgbModal, private router:Router, private RestApiService : RestApiService) {} 

  ngOnInit(): void {
    this.getActivityData();
  }

  openPopup() {
    const modalRef = this.modalService.open(FilMechaPopupComponent, { centered: true });
  
    modalRef.result.then(
      (result) => {
        console.log('Modal ditutup dengan hasil:', result);
      },
      (reason) => {
        console.log('Modal ditutup dengan alasan:', reason);
      }
    );
  } 
  addData() {
  this.router.navigate(['/filling/mechanical/preventive/adddata']);
  }

  getActivityData(){
    this.RestApiService.getActivityData().subscribe(
      (res:any) => {
        this.activityData = res.data[0];
        console.log('Activity Data:', this.activityData); 
      },
      (error:any) => {
        console.error(error)
      }
    );
  }
  // updateActivityData(){
  //   this.RestApiService.updateActivity(id, data).subscribe(

  //   )
  // }

  // deleteActivityData(){
  //   const deleteData = {status: 0}
  //   this.RestApiService.updateActivity
  // }
}
