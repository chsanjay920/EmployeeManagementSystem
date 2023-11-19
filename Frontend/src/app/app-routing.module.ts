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
import { authGuard } from './gaurds/auth.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [authGuard] },
  {
    path: 'projects/add',
    component: AddProjectComponent,
    canActivate: [authGuard],
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'employees/add',
    component: EmployeeRegisterComponent,
    canActivate: [authGuard],
  },
  { path: 'leaves', component: LeavesComponent, canActivate: [authGuard] },
  {
    path: 'leaves/request',
    component: AddLeavesComponent,
    canActivate: [authGuard],
  },
  { path: 'login', component: HrLoginComponent },
  {
    path: 'register/hr',
    component: HrRegisterComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login/employee',
    component: EmployeeLoginComponent,
    canActivate: [authGuard],
  },
  {
    path: 'register/employee',
    component: EmployeeRegisterComponent,
    canActivate: [authGuard],
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
