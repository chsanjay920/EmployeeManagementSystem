import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { AddLeavesComponent } from './components/add-leaves/add-leaves.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/add', component: AddProjectComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'leaves', component: LeavesComponent },
  { path: 'leaves/add', component: AddLeavesComponent }
]; 
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
