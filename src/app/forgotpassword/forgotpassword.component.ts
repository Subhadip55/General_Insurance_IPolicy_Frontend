import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  otpno:number;
  eneteredOTP:number;
  forgotPasswordForm!:FormGroup
  constructor(private fb:FormBuilder, private router:Router, private userServ:UserService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({            
      email: ['', Validators.required],                                        
      user_password: ['', Validators.required]
                               
    })
  }
  backtologin(){
    // console.log(this.otpno)
    // console.log(this.eneteredOTP)
    if(this.otpno == this.eneteredOTP) {
      this.userServ.resetPassword(this.forgotPasswordForm.value).subscribe(data => {
        if(data!=null) {
          alert("Password changed successfully")
  
          this.router.navigate(['/Login'])
        }
      });
    }
    else{
      alert("You entered a wrong otp")
    }
    
  
  }
  otp(){
    this.otpno=Math.floor(1000 + Math.random() * 9000);
    
  }
}
