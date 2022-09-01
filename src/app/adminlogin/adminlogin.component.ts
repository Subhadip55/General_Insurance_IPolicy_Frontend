import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/models/Admin';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminForm!:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private adServ:AdminService) { }

  ngOnInit(): void {
    
  this.adminForm = this.fb.group({            
      admin_username: ['', Validators.required],                                        
      admin_password: ['', Validators.required]
                               
        });  
  
  }
  login()
  {
    //console.log(this.adminForm.value);
    this.adServ.adminlogin(this.adminForm.value).subscribe(data=>
    {
      if(data==true) {
        alert("Welcome "+this.adminForm.value.admin_username);
        this.router.navigate(['/Admindash'])
      }
      else {
        alert("Wrong credentials")
      }
    })

      
    
  }
  get admin_username()
{
  return this.adminForm.get('admin_username')
}
get admin_password()
{
  return this.adminForm.get('admin_password')
}

}
