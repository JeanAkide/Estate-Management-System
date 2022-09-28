import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { Employee, IEmployee } from 'src/employee';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
 

  // @Input() data:any;
  // @Output() newDataEvent = new EventEmitter<string> ();
  
  
   data: any=[];

  
  empDetails !: FormGroup ;
  empObject : IEmployee = new Employee();
  empList: Employee []= []

  
  // AddNewData method
  // addNewData(value:string){
  //   this.newDataEvent.emit(value);
  // }


  
    constructor(
    private FormBuilder : FormBuilder, 
    private empService:EmployeeService,
    private router: Router
    ) { }

  ngOnInit(): void {

    
    
    // this.empList=this.data

    
    
    this.getAllEmployee();

     
    this.empDetails =this.FormBuilder.group({
      id:["", Validators.compose([Validators.required])],
      name : ["",Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      phone : ["",Validators.compose([Validators.required])],
      designation : ["",Validators.compose([Validators.required])],
      department : ["",Validators.compose([Validators.required])],
     });

}

viewEmployee(employee: any): void {
  this.router.navigate(['layout/employee-info/view-employee', employee.email]);
}


// Add Employee Function

addEmployee(formData:any){
  console.log(formData);
//  this.data.push(formData)




  console.log(this.empDetails);
  this.empList.push(formData);
  
  // this.data = data
  // this.empObject.id=this.empDetails.value.id;
  // this.empObject.name=this.empDetails.value.name;
  // this.empObject.phone=this.empDetails.value.phone;
  // this.empObject.designation=this.empDetails.value.designation;
  // this.empObject.department=this.empDetails.value.department;

  this.empService.addEmployee('addEmployee',formData)
  .subscribe({
    next: (res) =>{
      console.log(res);
      this.getAllEmployee();
    },
    error: (error) => {
      console.log("error getting data");
    }
  });

 }


getAllEmployee(){
  this.empService.getAllEmployee().subscribe({
    next: (res)=>{
      this.empList=res;
      // alert(res.length)
    },
    error: (error)=>{
      console.log("error getting data");
    }

  });
}

editEmployee(emp: Employee){
  this.empDetails.controls['id'].setValue(emp.id);
  this.empDetails.controls['name'].setValue(emp.name);
  this.empDetails.controls['email'].setValue(emp.email);
  this.empDetails.controls['phone'].setValue(emp.phone);
  this.empDetails.controls['designation'].setValue(emp.designation);
  this.empDetails.controls['department'].setValue(emp.department);

}



updateEmployee(){
  this.empObject.id=this.empDetails.value.id;
  this.empObject.name=this.empDetails.value.name;
  this.empObject.phone=this.empDetails.value.phone;
  this.empObject.designation=this.empDetails.value.designation;
  this.empObject.department=this.empDetails.value.department;


  this.empService.updateEmployee(`/${this.empObject.id}`, this.empObject).subscribe({
    next: (res)=>{
      this.getAllEmployee();
    },
    error: (error)=>{
      console.log("error getting data");
    }

  });
}

deleteEmployee(emp:Employee){


  this.empService.deleteEmployee(emp).subscribe({
    next: (res)=>{
      console.log(res);
      alert('deletion successful');
      this.getAllEmployee();
    },
    error: (error)=>{
      console.log("error getting data");
    }

  });

}




}
