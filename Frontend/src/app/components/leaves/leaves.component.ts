import { Component, OnInit } from '@angular/core';
import { LeavesService } from 'src/app/services/leaves.service';
import {  LeaveModel } from '../../model/leaves';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit{
  constructor(private leaveService:LeavesService){}
  leavesList !:LeaveModel[];
  ngOnInit(): void {
    this.leaveService.getLeaves().subscribe((data:LeaveModel[])=>{
      this.leavesList = data;
    })
  }
}
