import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    form: FormGroup;
   



  constructor(
    private fb: FormBuilder,
    private routeToPath : Router,
    private authservice: AuthService

  ) 
  
  {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
   }

  
   ngOnInit(): void {
    // localStorage.getItem('user')
  }

  onSubmit(data: any){
    this.authservice.login(this.form.value.username, this.form.value.password).subscribe((res:any)=>{
     if (res.status==200){
       console.log('user successfully ');
       this.routeToPath.navigate(['/layout']);
       
     }
    })
    if(data.username  && data.password)
    {
       this.routeToPath.navigate(['/layout/dashboard']);

      }
    console.log(data);
    
  }

   

}

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/JeanAkide/employee-management-system.git
// git push -u origin main