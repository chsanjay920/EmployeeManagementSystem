import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { AddLeavesComponent } from './components/add-leaves/add-leaves.component';
import { HrLoginComponent } from './components/hr-login/hr-login.component';
import { HrRegisterComponent } from './components/hr-register/hr-register.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/add', component: AddProjectComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/add', component: EmployeeRegisterComponent },
  { path: 'leaves', component: LeavesComponent },
  { path: 'leaves/add', component: AddLeavesComponent },
  { path: 'login', component: HrLoginComponent },
  { path: 'register/hr', component: HrRegisterComponent },
  { path: 'login/employee', component: EmployeeLoginComponent },
  { path: 'register/employee', component: EmployeeRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
