import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; 
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeDetailsComponent } from './employee-info/employee-details/employee-details.component';
import { ViewEmployeeComponent } from './employee-info/view-employee/view-employee.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import { EmployeeInfoModule } from './employee-info/employee-info.module';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }

  // {
  //   path:'home',component :LoginPageComponent,
  //        children:[
  //     {
  //    path:'layout', component : LayoutComponent
  //     }
  //        ]
  //   },
  {
    path:'login',
    component :LoginPageComponent
  },

  {
   path:'layout',
   component : LayoutComponent,
            
   children:[
  {path:'employee-info', loadChildren: () => import('./employee-info/employee-info.module').then(m => m.EmployeeInfoModule)},
            //  {
            //      path:'emp-details', 
            //      component : EmployeeDetailsComponent
            //  },
            //  {
            //     path:'view-employee/:email', 
            //     component : ViewEmployeeComponent
            //  },
             {
                path:'payment-info', 
                component : PaymentInfoComponent
             },
             {
              path:'projects', 
              component : ProjectsComponent
             },
             {
              path:'dashboard', 
              component : DashboardInfoComponent
             }
    ]
  },
  
  {
    path:"**",
  redirectTo:"login",
  pathMatch: "full"
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
