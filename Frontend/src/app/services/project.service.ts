import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { projectModel } from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}projects/`);
  }
  postProject(data: projectModel): any {
    this.http.post<any>(`${this.apiUrl}projects/`, data).subscribe((data) => {
      console.log(data);
    });
  }
}
