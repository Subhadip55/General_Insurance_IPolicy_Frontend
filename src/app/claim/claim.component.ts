import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  selectedTeam2 = '';
  claimForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userServ: UserService) { }
  policyno:number
  polno:number[]=[]
  toggle=false
  temp:any
  ngOnInit(): void {
    this.claimForm = this.fb.group({
      user_contactNo: ['', Validators.required],
      policy_no: ['', Validators.required],
      accident_type: ['', Validators.required]
      
    })
    this.temp=sessionStorage.getItem("policies")
    this.polno=JSON.parse(this.temp)
    // console.log(this.polno)
  
  }
  onSelected2(value: string) {
    this.selectedTeam2 = value;
  }
  backtodb() {

    for(let i=0;i<this.polno.length;i++)
    {
      if(this.claimForm.value.policy_no==this.polno[i])
      {
        this.toggle=true
        break
      }
    }

    if(this.toggle)
{

    this.userServ.claimInsurance(this.claimForm.value.policy_no,this.claimForm.value.user_contactNo,this.claimForm.value).subscribe(data=>{
      
      if(data!=null)
      {
        alert("Claim Registered")
        this.router.navigate(['/userdash'])
      }
      else
      {
        alert("Something Went Wrong")
        window.location.reload();
      }
    })


  }
  else{
    alert("check your insurance number")
    this.router.navigate(['/userdash'])
  }   
  }
  get user_contactNo()
  {
    return this.claimForm.get('user_contactNo')
  }
  get policy_no()
  {
    return this.claimForm.get('policy_no')
  }
  
}