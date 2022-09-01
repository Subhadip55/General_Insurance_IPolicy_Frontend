import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/models/Claim';
import { MotorInsurance } from 'src/models/MotorInsurance';
import { AdminService } from '../services/admin.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  status: string = "Null"
  amount: number
  inp:any
  insuranceList1: MotorInsurance[] = [];
  claimlist: Claim[] = [];
  constructor(private router: Router, private adminServ: AdminService) { }

  ngOnInit(): void {
    this.adminServ.showallinsurance().subscribe(data => {
      this.insuranceList1 = data;

      this.adminServ.showallclaim().subscribe(data => {
        this.claimlist = data;
      })

    })
  }
  approveinsurance(i: Number) {
    console.log(this.insuranceList1.values)
    this.adminServ.approveinsurance(i).subscribe(data => {
      alert("Insurance Approved")
      //this.router.navigate(['/Admindash'])
      window.location.reload();
    })
  }
  rejectinsurance(i: Number) {
    console.log(i)
    this.adminServ.rejectinsurance(i).subscribe(data => {
      alert("Insurance Rejected")
      window.location.reload();
    })
  }
  approveclaim(c: Number) {
     this.inp = prompt("Enter Amount");

    this.amount = parseInt(this.inp)

    // console.log(this.insuranceList1.values)
    this.adminServ.approveclaim(c, this.amount).subscribe(data => {
      alert("Claim Approved")
      //this.router.navigate(['/Admindash'])
      window.location.reload();
    })
  }
  rejectclaim(c: Number) {
    //console.log(i)
    this.adminServ.rejectclaim(c).subscribe(data => {
      alert("Claim Rejected")
      window.location.reload();
    })
  }

}
