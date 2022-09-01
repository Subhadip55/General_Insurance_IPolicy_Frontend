import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  selectedTeam = '';
  twoWheeler:boolean = false;
  fourWheeler:boolean = false;
  buyInsuranceForm:FormGroup;
  
  constructor(private fb:FormBuilder,private router:Router,private userServ:UserService) { }

  ngOnInit(): void {

    this.buyInsuranceForm= this.fb.group({            
      manufacturer: ['', Validators.required],                                        
      model: ['', Validators.required],
      purchase_date: ['', Validators.required],
      registration_no: ['', Validators.required],
      engine_no: ['', Validators.required],
      chasis_no: ['', Validators.required],
      type: ['', Validators.required]
                               
    }); 
  }
  onSelected(value:string)
  {
    this.selectedTeam=value;
    if(value == "4-wheeler") {
      this.twoWheeler = false;
      this.fourWheeler = true;
    }
    if(value == "2-wheeler") {
      this.twoWheeler = true;
      this.fourWheeler = false;
    }
  }
  plan()
  {
    // console.log(this.buyInsuranceForm.value)
      sessionStorage.setItem("buyForm1",JSON.stringify(this.buyInsuranceForm.value))
      // sessionStorage.setItem("buyForm1",this.buyInsuranceForm.value)
      sessionStorage.setItem("choice","buy");
      this.router.navigate(['/plan'])
    }
    get manufacturer()
{
  return this.buyInsuranceForm.get('manufacturer')
}
get email()
{
  return this.buyInsuranceForm.get('email')
}
get purchase_date()
{
  return this.buyInsuranceForm.get('purchase_date')
}
get registration_no()
{
  return this.buyInsuranceForm.get('registration_no')
}
get engine_no()
{
  return this.buyInsuranceForm.get('engine_no')
}
get chasis_no()
{
  return this.buyInsuranceForm.get('chasis_no')
}
}
