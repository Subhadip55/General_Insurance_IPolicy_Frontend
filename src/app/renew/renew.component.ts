import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {

  renewForm: FormGroup
  email2: any
  polno:number[]=[]
  toggle=false
  temp:any
  constructor(private fb: FormBuilder, private router: Router, private userServ: UserService) { }

  ngOnInit(): void {
    this.renewForm = this.fb.group({
      email: ['', Validators.required],
      user_contactNo: ['', Validators.required],
      policy_no: ['', Validators.required]
    })
    this.email2 = sessionStorage.getItem("email")

    this.temp=sessionStorage.getItem("policies")
    this.polno=JSON.parse(this.temp)
    // console.log(this.polno)

  }
  goToPlan() {

    for(let i=0;i<this.polno.length;i++)
    {
      if(this.renewForm.value.policy_no==this.polno[i])
      {
        this.toggle=true
        break
      }
    }
if(this.toggle)
{
    if (this.email2 == this.renewForm.value.email) {
      sessionStorage.setItem("choice", "renew");
      sessionStorage.setItem("renewForm", JSON.stringify(this.renewForm.value));
      this.router.navigate(['/plan'])
    }

    else {
      alert("Incorrect Email")
      window.location.reload()
    }
  }
  else{
    alert("check your insurance number")
    this.router.navigate(['/userdash'])

  }   
  }
  get email()
  {
    return this.renewForm.get('email')
  }
  get user_contactNo()
  {
    return this.renewForm.get('user_contactNo')
  }
  get policy_no()
  {
    return this.renewForm.get('policy_no')
  }
  
}
