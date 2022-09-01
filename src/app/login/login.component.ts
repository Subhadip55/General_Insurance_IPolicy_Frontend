import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginUserForm:FormGroup
  constructor(private fb:FormBuilder, private router:Router, private userServ:UserService) { }

  ngOnInit(): void {
    this.loginUserForm = this.fb.group({            
      email: ['', Validators.required,Validators.email],                                    
      user_password: ['', Validators.required]
                               
    })
  }


  dashboard()
  {
    this.userServ.successfullLogin(/*this.loginUserForm.value.email, this.loginUserForm.value.user_password*/
                  this.loginUserForm.value
                  )
                  .subscribe(data => {
                    if(data!=null){
                    //alert("Welcome "+this.loginUserForm.value.email)
                    alert("Welcome "+data.user_name)
                    this.router.navigate(['/userdash'])
                    sessionStorage.setItem("email", this.loginUserForm.value.email/*JSON.stringify(this.loginUserForm.value.email)*/); 
                  }
                  else{
                    alert("Incorrect Credentials")
                  }
                  })
  }
  finalregister()
  {
    this.router.navigate(['/register'])
  }
  forgotpassword()
  {
    this.router.navigate(['/fpw'])
  }
get email()
{
  return this.loginUserForm.get('email')
}
get user_password()
{
  return this.loginUserForm.get('user_password')
}

}

