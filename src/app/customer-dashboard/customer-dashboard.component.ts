import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/models/Claim';
import { MotorInsurance } from 'src/models/MotorInsurance';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  claimlist: Claim[] = []
  insuranceList: MotorInsurance[] = [];
  email: any;

  polno:number[]=[]

  visiblePolicy = true
  visibleClaim = false
  constructor(private router: Router, private userServ: UserService) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("email");
    this.userServ.showInsuranceList(this.email).subscribe(data => {
      this.insuranceList = data;

      // for(let i=0;i<this.insuranceList.length;i++)
      // {
      //   if(this.insuranceList[i].message=="Approved")
      //   this.polno[i]=this.insuranceList[i].policy_no
      // }

      // console.log(this.polno)
      
      for(let i=0;i<this.insuranceList.length;i++)
    {
      if(this.insuranceList[i].message=="Approved")
      {
       this.polno.push(this.insuranceList[i].policy_no)
       
      }
    }
    console.log(this.polno)
    sessionStorage.setItem ("policies",JSON.stringify(this.polno))
    this.userServ.showclaimList(this.email).subscribe(data => {
      this.claimlist = data;
    })

    })

   
  

  }
  Insurance() {


    this.router.navigate(['/Login'])
  }
  buy() {
    this.router.navigate(['/buy'])
  }
  renew() {
    this.router.navigate(['/renew'])
  }
  claim() {
    this.router.navigate(['/claim'])
  }
  mypol() {
    this.visiblePolicy = true;
    this.visibleClaim = false;
  }
  myclm() {
    this.visiblePolicy = false;
    this.visibleClaim = true;
  }
}
