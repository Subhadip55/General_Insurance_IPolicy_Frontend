import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  confirmPassword: string;
  registrationForm!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private userServ:UserService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({            
      user_name: ['', Validators.required],                                        
      email: ['', Validators.required],
      user_dob: ['', Validators.required],
      user_dl: ['', Validators.required],
      user_contactNo: ['', Validators.required],
      user_city: ['', Validators.required],
      user_state: ['', Validators.required],
      user_zipCode: ['', Validators.required],
      user_password: ['', Validators.required]
                               
    });  
  }
  login()
  {
    // console.log(this.registrationForm.value.user_password)
    // console.log(this.confirmPassword)
    if(this.registrationForm.value.user_password == this.confirmPassword) {
      this.userServ.createUserRegistration(this.registrationForm.value).subscribe((data: any) => {
        //console.log(data);
        if(data!=null)
        {
        alert("Registration Succesfull redirecting to login page")
        this.router.navigate(['/Login']);
        }
        else
        {

          alert("Registration Failed, Please Fill out all fields.")
          this.router.navigate(['/Home']);

        }
      })
    }
    else {
      alert("Password is not matching")
      

    }
  }
get user_name()
{
  return this.registrationForm.get('user_name')
}
get email()
{
  return this.registrationForm.get('email')
}
get user_password()
{
  return this.registrationForm.get('user_password')
}
get user_dob()
{
  return this.registrationForm.get('user_dob')
}
get user_dl()
{
  return this.registrationForm.get('user_dl')
}
get user_contactNo()
{
  return this.registrationForm.get('user_contactNo')
}
get user_city()
{
  return this.registrationForm.get('user_city')
}
get user_state()
{
  return this.registrationForm.get('user_state')
}
get user_zipCode()
{
  return this.registrationForm.get('user_zipCode')
}
}
