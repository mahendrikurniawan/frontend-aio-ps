import { Component } from '@angular/core';
import { RestApiService } from 'src/app/core/services/rest-api.service';

@Component({
  selector: 'app-popup-detail',
  templateUrl: './filling-mecha-popup.component.html',
  styleUrls: ['./filling-mecha-popup.component.scss']
})
export class FilMechaPopupComponent {

  constructor(private RestApiService : RestApiService) {} 
  allFillingMechanical: any;

  approveData() {-
    // Logika untuk menyetujui data di sini
    // Anda dapat menambahkan logika yang sesuai, seperti mengirim permintaan HTTP ke server atau memperbarui status data.
    console.log('Data disetujui.');
  }

  unapproveData() {
    // Logika untuk tidak menyetujui data di sini
    // Anda dapat menambahkan logika yang sesuai, seperti mengirim permintaan HTTP ke server atau memperbarui status data.
    console.log('Data tidak disetujui.');
  }
  getAllFillingMechanical(){
    this.RestApiService.getAllFillingMechanical().subscribe(
      (res:any) => {
        this.allFillingMechanical = res.data[0];
        console.log('Activity Data:', this.allFillingMechanical); 
      },
      (error:any) => {
        console.error(error)
      }
    );
  }
}
