import { Injectable } from '@angular/core';
import { array } from './contract/array';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registerData: array[] = [];
  view: any;
  registeredData(data: any): Observable<any> {
    return this.http.post('/users/addUser', data);
  }
  // registeredData(data: array):  {
  //   return this.HttpClientModule.post('/users/addUser'+ data);
  // }
  getRegisterData(): array[] {
    return this.registerData;
  }
  viewData(data: any): void {
    this.view.push(data);
  }
  getViewData(){
    return this.view;
  }
  constructor(private http: HttpClient) { }
}
