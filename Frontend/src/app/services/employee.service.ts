import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectModel } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}employees/`);
  }
  // postProject(data: projectModel): any {
  //   this.http.post<any>(`${this.apiUrl}projects/`, data).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
