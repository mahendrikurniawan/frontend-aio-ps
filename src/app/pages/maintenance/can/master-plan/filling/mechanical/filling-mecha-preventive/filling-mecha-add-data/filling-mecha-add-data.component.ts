import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/core/services/rest-api.service';
import { ActivityGroup } from './activity-group.model';
import { Material } from './activity-material.model.group';
import { Activity } from './activity.model';

@Component({
  selector: 'app-filling-mecha-add-data',
  templateUrl: './filling-mecha-add-data.component.html',
  styleUrls: ['./filling-mecha-add-data.component.scss']
})
export class FillingMechaAddDataComponent implements OnInit {

  newActivityGroup: ActivityGroup = {
    function_location: '',
    date: '',
    pic: '',
    equipment: '',
    type: 'preparation',
    category: 'mechanical',
    sub_category: 'preventive',
  };

  newActivity: Activity = {
    operation_task: '',
    qty: null,
    status_part: '',
    category_activity: '',
    work_center: '',
    duration: '',
    id_activity_group: null
  };

  newActivityMaterial: Material = {
    description_material: '',
    id_activity: null
  };

  // bread crumb items
  breadCrumbItems!: Array < {} > ;
  idActivityGroup: any;
  idActivity: any;
  activityData: Activity[] = [];

  constructor(
    private router: Router,
    private RestApiService: RestApiService
  ) {}
  ngOnInit(): void {
    console.log('ngOnInit() dijalankan');

    this.breadCrumbItems = [{
        label: 'Forms'
      },
      {
        label: 'Form Layout',
        active: true
      }
    ];
  }
  forBack() {
    console.log('forBack() dipanggil');
    this.router.navigate(['filling/mechanical/preventive']);
  }

  insertActivityGroup(dataActivityGroup: any) {
    console.log(dataActivityGroup)
    this.RestApiService.insertActivityGroup(dataActivityGroup).subscribe(
      (res: any) => {
        if (res.status == true) {
          this.idActivityGroup = res.data[0]
          console.log(this.idActivityGroup)
        }
      },
      (error) => {
        console.error(error)
      }
    )
  }

  insertActivity(dataActivity: any) {
    this.RestApiService.insertActivity(dataActivity).subscribe(
    (res:any) => {
      if (res.status == true) {
        this.idActivity = res.data[0]
        this.newActivity.id_activity_group = this.idActivity
      }
    },
    (error) => {
      console.error(error)
    })
  }
  onClick() {
    this.insertActivityGroup(this.newActivityGroup)
    // console.log(this.newActivityGroup)
  }

  onSubmitActivity() {
    // console.log(this.newActivity)
    // this.insertActivity(this.newActivity)
  }
}
