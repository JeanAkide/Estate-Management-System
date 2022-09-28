import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-info/employee.service';
import { Employee } from 'src/employee';
import { ProjectService } from '../project.service';
import { Project } from 'src/project';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {

  empList: Employee []= []
  totalemployees:number=0;
  pjList: Project[]=[]
  totalprojects:number=0;

  constructor(
    private empService:EmployeeService,
    private pjService:ProjectService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee()
    this.getAllProjects()
  }
 
  getAllEmployee(){
    this.empService.getAllEmployee().subscribe({
      next: (res)=>{
        this.empList=res;
        this.totalemployees=res.length
        // alert(res.length)
      },
      error: (error)=>{
        console.log("error getting data");
      }
  
    });
  }

  getAllProjects(){
    this.pjService.getAllProjects().subscribe({
      next: (res)=>{
        this.pjList=res;
        this.totalprojects=res.length
      },
      error: (error)=>{
        console.log("error getting data");
      }
  
    });
  
  
  }






}
