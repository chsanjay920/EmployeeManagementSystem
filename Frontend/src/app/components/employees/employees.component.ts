import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{

  EmployeesList !:EmployeeModel[] ;
  constructor(private employeesService : EmployeeService){}
  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((data:EmployeeModel[])=>{
      this.EmployeesList = data;
      console.log(this.EmployeesList)
    })
  }
}
