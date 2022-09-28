import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router'
import { Employee } from 'src/employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeEmail:any
  empList: Employee []= []
  retrievedEmployee:any

  constructor(private route:ActivatedRoute,
    private empService:EmployeeService,
    private location:Location) { }

  ngOnInit(): void {
    this.retriveData()
  }



  retriveData(){
    this.employeeEmail=this.route.snapshot.paramMap.get("email");
    if(this.employeeEmail !== undefined){
      this.getAllEmployee();
    }
    console.log(this.employeeEmail)
  }
  getAllEmployee(){
    this.empService.getAllEmployee().subscribe({
      next: (res)=>{
        this.empList=res;
        this.empList.filter((item)=>{
          console.log(item)
          if(item.email==this.employeeEmail){
          this.retrievedEmployee=item
          console.log(this.retrievedEmployee);
          }
          // return this.retrievedEmployee
        })
      },
      error: (error)=>{
        console.log("error getting data");
      }
  
    });
  }

  goBack():void{
    this.location.back();
  }

}
