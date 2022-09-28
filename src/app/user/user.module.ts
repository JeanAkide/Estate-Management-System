import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    UserSigninComponent,
    UserSignupComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
