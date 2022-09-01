import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  selectedTeam1 = '';
  selectedTeam2 = '';
  planForm:FormGroup;
  form1: FormGroup;
  model_name: String;
  age: number;
  b1: any;
  choice: any;
  renewFormData: FormGroup;
  renewData: any;
  renewVehicleType: string;
  calpremium:Number
  visible=false;
  constructor(private fb:FormBuilder,private router:Router,private userServ:UserService) { }

  ngOnInit(): void {
    this.choice = sessionStorage.getItem("choice");
    // console.log(this.choice)
    if(this.choice == "buy") {
      this.planForm= this.fb.group({            
        plan: ['', Validators.required],                                        
        year: ['', Validators.required]
            
      });
      this.form1= this.fb.group({            
        manufacturer: ['', Validators.required],                                        
        model: ['', Validators.required],
        purchase_date: ['', Validators.required],
        registration_no: ['', Validators.required],
        engine_no: ['', Validators.required],
        chasis_no: ['', Validators.required],
        type: ['', Validators.required]
                                 
      });
      
      this.b1 = sessionStorage.getItem("buyForm1");
      // console.log(this.b1);  
      this.form1.setValue(JSON.parse(this.b1)); 
    }
    else {
      this.planForm= this.fb.group({            
        plan: ['', Validators.required],                                        
        year: ['', Validators.required]
            
      });
      this.renewFormData=this.fb.group({
        email: ['', Validators.required], 
        user_contactNo:['', Validators.required],                                       
        policy_no: ['', Validators.required]
  
  
      });
      this.renewData = sessionStorage.getItem("renewForm");
      this.renewFormData.setValue(JSON.parse(this.renewData));
    }
       
  }

  public calculatePremium() {
    if(this.choice == "buy") {  // buy insurance
      this.model_name = this.form1.value.model;
      //console.log(parseInt(this.form1.value.purchase_date.substr(0,4)))
      // this.age = new Date().getFullYear() - parseInt(this.form1.value.purchase_date.substr(0,4));
      
      this.age = new Date().getFullYear() - new Date(this.form1.value.purchase_date).getFullYear();

      //console.log(this.age);
      this.userServ.calculatePremium(this.form1.value.type, this.model_name, this.age).subscribe(data => {
        console.log(this.planForm.value.plan)
        if(this.planForm.value.plan==="Comprehensive"){
        data = Number(data) * this.planForm.value.year*1.5;
        }
        else{
          data = Number(data) * this.planForm.value.year;
        }
        sessionStorage.setItem("premiumAmount",data.toString());
        sessionStorage.setItem("buyForm2", JSON.stringify(this.planForm.value));
        alert("Premium is "+data);
        this.calpremium=data;
        this.visible=true;
      })
    }
    else {  // renew insurance
      sessionStorage.setItem("planYear",JSON.stringify(this.planForm.value));
      // console.log(this.renewFormData.value.policy_no);
      this.userServ.showInsuranceByPolicyNo(this.renewFormData.value.policy_no).subscribe(data => {

        this.model_name = data.model;
        // console.log(new Date(data.purchase_date).getFullYear());
        this.age = new Date().getFullYear() - new Date(data.purchase_date).getFullYear(); // Look here
        // this.age = data.dateOfExpiry.getFullYear() - data.purchase_date.getFullYear();  // need to implement this
        this.renewVehicleType = data.type;
        // console.log(this.model_name);
        this.userServ.calculatePremium(this.renewVehicleType, this.model_name, this.age).subscribe(data => {
          if(this.planForm.value.plan==="Comprehensive"){
            data = Number(data) * this.planForm.value.year*1.5;
            }
            else{
              data = Number(data) * this.planForm.value.year;
            }
            sessionStorage.setItem("premiumAmount",data.toString());
            sessionStorage.setItem("planYear", JSON.stringify(this.planForm.value));
            alert("Premium is "+data);
            this.calpremium=data;
            this.visible=true;
        });
      });
      // console.log(this.model_name); // outside it is not accessing : undefined
      // this.userServ.calculatePremium(this.renewVehicleType, this.model_name, this.age).subscribe(data => {
      //   sessionStorage.setItem("premiumAmount",data.toString());
      //   sessionStorage.setItem("planYear", JSON.stringify(this.planForm.value));
      //   alert("Premium is "+data);

      // });

    }
  }

  onSelected1(value:string)
  {
    this.selectedTeam1=value;
  }
  onSelected2(value:string)
  {
    this.selectedTeam2=value;
  }
  payment()
  {
    this.router.navigate(['/payment'])
  }
}