import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";

const routes:Routes = [
    {
      path: 'view-employee/:email', 
    component: ViewEmployeeComponent
    },
    {
     path:'emp-details',
     component:EmployeeDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class EmployeeInfoRoutingModule { }