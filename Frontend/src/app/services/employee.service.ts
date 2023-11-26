import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectModel } from '../model/project';
import { EmployeeModel } from '../model/employee';
import { LoginModel } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}employees/`);
  }
  postEmployee(data: EmployeeModel): any {
    return this.http.post<any>(`${this.apiUrl}employees/`, data);
  }
  SignIn(data: LoginModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}employees/employee`, data);
  }
}
