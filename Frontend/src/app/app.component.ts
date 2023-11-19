import { Component } from '@angular/core';
import { ProjectService } from './services/project.service';
import { projectModel } from './model/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  constructor(private apiserver:ProjectService)
  {}
  callapi()
  {
    this.apiserver.getProjects().subscribe((data:projectModel[])=>{
      console.log(data);
    })
  }
}
