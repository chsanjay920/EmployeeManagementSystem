import { Component,Input } from '@angular/core';
import { projectModel } from 'src/model/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() 
  projectDetailes!:projectModel; 
}
