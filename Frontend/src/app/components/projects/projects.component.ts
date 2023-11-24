import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { projectModel } from '../../model/project';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects!: projectModel[];
  isAdmin: boolean = false;
  private subscription: any;
  constructor(
    private projectApi: ProjectService,
    private authService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit() {
    this.projectApi.getProjects().subscribe((data: projectModel[]) => {
      this.projects = data;
      console.log(this.projects);
    });
    this.subscription = this.authService.IsLogedIn.subscribe((data) => {
      this.isAdmin = data.IsAdmin;
    });
  }
  RedirectToProjects() {
    console.log('project');
    this.router.navigate(['/projects/add']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
