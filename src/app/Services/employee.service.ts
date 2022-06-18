import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/Classes/iemployee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  getAllEmployees(): Observable<any> {
    let url = this.baseUrl + "/api/Employees";
    return this.http.get(url);
  }

  getEmployee(id: Guid): Observable<any> {
    let url = this.baseUrl + "/api/Employees/" + id;
    return this.http.get(url);
  }

  AddEmployee(employee: IEmployee): Observable<any> {
    let url = this.baseUrl + "/api/Employees";
    return this.http.post(url, employee)
  }

  UpdateEmployee(id: Guid, employee: IEmployee): Observable<any> {
    let url = this.baseUrl + "/api/Employees/" + id;
    return this.http.put(url, employee);
  }

  DeleteEmployee(id: Guid): Observable<any> {
    let url = this.baseUrl + "/api/Employees/" + id;
    return this.http.delete(url);
  }


}
