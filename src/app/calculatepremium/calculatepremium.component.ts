import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-calculatepremium',
  templateUrl: './calculatepremium.component.html',
  styleUrls: ['./calculatepremium.component.css']
})
export class CalculatepremiumComponent implements OnInit {
  selectedTeam = '';
  twoWheeler:boolean = false;
  fourWheeler:boolean = false;
  calInsuranceForm:FormGroup;
  estimatevalue:Number
  visible=false;
  constructor(private fb:FormBuilder,private router:Router,private userServ:UserService) { }

  ngOnInit(): void {
    this.calInsuranceForm= this.fb.group({            
      type: ['', Validators.required],                                        
      model: ['', Validators.required],
      age: ['', Validators.required],
      
                               
    }); 
  }

calculate()
{

  this.userServ.calculatePremium(this.calInsuranceForm.value.type,this.calInsuranceForm.value.model,this.calInsuranceForm.value.age).subscribe(data=>
    {
      this.estimatevalue=data;
      this.visible=true;
      if(data==0)
      {
        alert("error occured")
      }
    })

  
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
}
