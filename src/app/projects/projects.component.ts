import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl}from '@angular/forms'
import { Project,IProject } from 'src/project';
import { ProjectService } from '../project.service';
import { NzInputModule } from 'ng-zorro-antd/input';
import { EmployeeService } from '../employee-info/employee.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  data:any=[];
 
  pjDetails !:FormGroup;
  pjObject: IProject = new Project ();
  pjList: Project[]=[]
  empdata: any=[];
  


  constructor(
    private formBuilder: FormBuilder,
    private pjService: ProjectService,
    private empService:EmployeeService
  ) { }

  ngOnInit(): void {


    
   this.getAllProjects();
   this.getAllEmployee();

   this.pjDetails=this.formBuilder.group({
     id:[''],
     name : [''],
     description:['']
   
    });

  }

  addProject(formData:any){

    console.log(formData);
    


    console.log(this.pjDetails);
    this.pjList.push(formData);

    // this.pjObject.id=this.pjDetails.value.id;
    // this.pjObject.name=this.pjDetails.value.name;
    // this.pjObject.description=this.pjDetails.value.description;
    

    this.pjService.addProject('addProject',formData)
  .subscribe({
    next: (res) =>{
      console.log(res);
      this.getAllProjects();
    },
    error: (error) => {
      console.log("error getting data");
    }
  });
}

getAllProjects(){
  this.pjService.getAllProjects().subscribe({
    next: (res)=>{
      this.pjList=res;
    },
    error: (error)=>{
      console.log("error getting data");
    }

  });


}

assignProject(){
  if (true) 
{
    console.log('This will always executed.');
}
  
}


deleteProject(pj:Project){

  this.pjService.deleteProject(pj).subscribe({
    next: (res)=>{
      console.log(res);
      alert('deletion successful');
      this.getAllProjects();
    },
    error: (error)=>{
      console.log("error getting data");
    }

  });

}

getAllEmployee(){
 this.empService.getAllEmployee().subscribe(res=>{
  console.log(res);
this.empdata=res
 })
 console.log(this.empdata);
 
}


}
