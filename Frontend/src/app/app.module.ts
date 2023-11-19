import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavBarComponent } from './components/left-nav-bar/left-nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { AddLeavesComponent } from './components/add-leaves/add-leaves.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { HrLoginComponent } from './components/hr-login/hr-login.component';
import { HrRegisterComponent } from './components/hr-register/hr-register.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavBarComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectCardComponent,
    AddProjectComponent,
    EmployeesComponent,
    LeavesComponent,
    AddLeavesComponent,
    EmployeeLoginComponent,
    HrLoginComponent,
    HrRegisterComponent,
    EmployeeRegisterComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
