import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeInfoRoutingModule } from './employee-info.routing'
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    ViewEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeInfoRoutingModule,
    NzTabsModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule
  ]
})
export class EmployeeInfoModule { }
