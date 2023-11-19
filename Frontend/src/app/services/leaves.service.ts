import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectModel } from 'src/model/project';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getLeaves(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}leaves/`);
  }
  postProject(data: projectModel): any {
    this.http.post<any>(`${this.apiUrl}leaves/`, data).subscribe((data) => {
      console.log(data);
    });
  }
}
