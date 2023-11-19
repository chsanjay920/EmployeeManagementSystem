import { Component, OnInit } from '@angular/core';
import { LeavesService } from 'src/app/services/leaves.service';
import {  LeaveModel } from '../../model/leaves';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit{
  constructor(private leaveService:LeavesService,
    private authService:AuthenticationService){}
  leavesList !:LeaveModel[];
  isAdmin:boolean = false;
  ngOnInit(): void {
    this.leaveService.getLeaves().subscribe((data:any[])=>{
      this.leavesList = data;
      console.log(data);
    })
    this.isAdmin = this.authService.IsAdmin();
  }
  Approve(empid:any)
  {
    
  }
  Reject(empid:any)
  {

  }

}
