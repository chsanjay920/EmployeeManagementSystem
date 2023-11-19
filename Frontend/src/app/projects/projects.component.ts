import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { projectModel } from 'src/model/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects!:projectModel[]; 
  constructor(private projectApi:ProjectService,private router: Router) { }
  ngOnInit() {
    this.projectApi.getProjects().subscribe((data:projectModel[])=>{
      this.projects = data;
      console.log(this.projects)
    })
  }
  RedirectToProjects()
  {
    console.log("project")
    this.router.navigate(['/projects/add'])
  }
}
