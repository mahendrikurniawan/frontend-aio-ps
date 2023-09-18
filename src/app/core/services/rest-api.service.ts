import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalComponent } from "../../global-component";
import { environment } from 'src/environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` })
};


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public httpOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }
  constructor(private httpClint: HttpClient) { }
  /**
  * Calender Rest Api
  */
  // Get
  getCalendarData(): Observable<any> {
    var headerToken = {'Authorization': `Bearer `+ localStorage.getItem('token')};    
    return this.httpClint.get(GlobalComponent.API_URL + 'apps/calendar/', {  headers: headerToken, responseType: 'text' });
  }

  getCustomApps(userId: number) {
    return this.httpClint.get<any>(
      environment.API_URL + environment.userAppId + userId,
      this.httpOptions()
    );
  }

  insertCustomApp(data: any) {
    return this.httpClint.post<any>(
      environment.API_URL + environment.userApp,
      { form_data: data },
      this.httpOptions()
    );
  }

  deleteCustomApp(customId: number) {
    return this.httpClint.delete<any>(
      environment.API_URL + environment.userAppId + customId,
      this.httpOptions()
    );
  }

  getAllApps() {
    return this.httpClint.get<any>(
      environment.API_URL + environment.applications,
      this.httpOptions()
    );
  }

  insertApp(data: any) {
    return this.httpClint.post<any>(
      environment.API_URL + environment.applications,
      { form_data: data },
      this.httpOptions()
    );
  }

  updateApp(id: number, data: any) {
    return this.httpClint.put<any>(
      environment.API_URL + environment.applicationId + id,
      { form_data: data },
      this.httpOptions()
    );
  }

  deleteApp(id: number) {
    return this.httpClint.delete<any>(
      environment.API_URL + environment.applicationId + id,
      this.httpOptions()
    );
  }

  // Image Handler Endpoints

  getImage(filename: string) {
    return this.httpClint.get<any>(
      environment.API_URL + environment.getImage + filename,
      this.httpOptions()
    );
  }

  insertImage(file: any) {
    return this.httpClint.post<any>(
      environment.API_URL + environment.image,
      { file: file },
      this.httpOptions()
    );
  }

  deleteImage(filename: string) {
    return this.httpClint.delete<any>(
      environment.API_URL + environment.image + filename,
      this.httpOptions()
    );
  }

  getActivityData(){
    return this.httpClint.get<any>(
      environment.API_URL + environment.getActivity,
      this.httpOptions());
  }

  getAllFillingMechanical(){
    return this.httpClint.get<any>(
      environment.API_URL + environment.getAllFillingMechanical,
      this.httpOptions());
  }

  insertActivityGroup(dataActivityGroup:any){
    return this.httpClint.post<any>(
      environment.API_URL + environment.insertActivityGroup, {form_data: dataActivityGroup},
      this.httpOptions());
  }

  insertActivity(dataActivity:any){
    return this.httpClint.post<any>(
      environment.API_URL + environment.insertActivity,
      this.httpOptions());
  }

  insertActivityMaterial(){
    return this.httpClint.post<any>(
      environment.API_URL + environment.insertActivityMaterial,
      this.httpOptions());
  }

}
