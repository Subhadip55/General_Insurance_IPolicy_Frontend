import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 otpno: number;
 confirmOTP: number;
 paymentForm:FormGroup;
 form1: FormGroup;
 form2: FormGroup;
 buy1: any;
 plan2: any;
 formJoin: FormGroup;
insuranceForm: FormGroup;
paymentAmount: number;
cardHolderName: string;
val: any;
email: string;
valEmail: any;
valcardHolderName: any;
choice: any;
renewForm: FormGroup;
rf: any;
py: any;
planYear: FormGroup;

 constructor(private fb:FormBuilder,private router:Router,private userServ:UserService) { }

  ngOnInit(): void {
    this.choice = sessionStorage.getItem("choice");
    this.val = sessionStorage.getItem("premiumAmount");
    //console.log(this.val);
    this.paymentAmount = parseInt(this.val);
    //console.log(this.paymentAmount);

    this.paymentForm= this.fb.group({            
      cardHolderName: ['', Validators.required],                                        
      card_no: ['', Validators.required],
      cvv: ['', Validators.required],
      expiryDateOfCard: ['', Validators.required],
      payment_amt: [this.paymentAmount, Validators.required]
    });
    if(this.choice == "buy") {
      this.form1= this.fb.group({            
        manufacturer: ['', Validators.required],                                        
        model: ['', Validators.required],
        purchase_date: ['', Validators.required],
        registration_no: ['', Validators.required],
        engine_no: ['', Validators.required],
        chasis_no: ['', Validators.required],
        type: ['', Validators.required]
      });
      this.form2= this.fb.group({            
        plan: ['', Validators.required],                                        
        year: ['', Validators.required]
            
      });

      this.buy1 = sessionStorage.getItem("buyForm1");
      this.plan2 = sessionStorage.getItem("buyForm2");
      //console.log(this.plan2);
      this.form1.setValue(JSON.parse(this.buy1));
      this.form2.setValue(JSON.parse(this.plan2));

      this.insuranceForm = this.fb.group({            
        manufacturer: [this.form1.value.manufacturer, Validators.required],                                        
        model: [this.form1.value.model, Validators.required],
        purchase_date: [this.form1.value.purchase_date, Validators.required],
        registration_no: [this.form1.value.registration_no, Validators.required],
        engine_no: [this.form1.value.engine_no, Validators.required],
        chasis_no: [this.form1.value.chasis_no, Validators.required],
        type: [this.form1.value.type, Validators.required],
        plan: [this.form2.value.plan, Validators.required],                                        
        year: [this.form2.value.year, Validators.required],
        payment: this.paymentForm

      });

      this.valEmail = sessionStorage.getItem("email");
      this.email = this.valEmail.toString();
      //console.log(this.cardHolderName);
      // this.buy1 = sessionStorage.getItem("buyForm1");
      // this.plan2 = sessionStorage.getItem("buyForm2");
      // // this.bp = this.buy1 +","+ this.plan2;
      // // console.log(this.bp);
      // this.form1.setValue(JSON.parse(this.buy1));
      // this.form2.setValue(JSON.parse(this.plan2));

      // this.formJoin=new FormGroup({form1:this.form1,form2:this.form2})

      // //this.insuranceForm.setValue(JSON.parse(this.bp));
      // console.log(this.formJoin.value);
      // this.insuranceForm.setValue(this.form1);
      // this.insuranceForm.setValue(this.form2);
      //console.log(this.insuranceForm.value)
    }
    else {
      this.renewForm=this.fb.group({
        email: ['', Validators.required], 
        user_contactNo:['', Validators.required],                                       
        policy_no: ['', Validators.required]
      });
      this.rf = sessionStorage.getItem("renewForm");
      this.renewForm.setValue(JSON.parse(this.rf));
      
      this.planYear= this.fb.group({            
        plan: ['', Validators.required],                                        
        year: ['', Validators.required]
            
      });
      this.py = sessionStorage.getItem("planYear");
      this.planYear.setValue(JSON.parse(this.py));
    }
  }
backtodb(){
  if(this.choice == "buy") {
    if(this.otpno == this.confirmOTP) {
      //console.log(this.insuranceForm.value);
      this.userServ.buyInsurance(this.email, this.insuranceForm.value).subscribe(data=>{
        if(data==null) {
          alert("Some error occurred")
        }
        else
        {
          alert("Payment is succesfully done")
        }
        this.router.navigate(['/userdash'])
      })
    }
    else {
      alert("You entered an wrong OTP")
    }
  }
  else {
    if(this.otpno == this.confirmOTP) {
      //console.log(this.insuranceForm.value);
      this.userServ.renewInsurance(this.renewForm.value.policy_no, 
                                    this.renewForm.value.email, 
                                    this.renewForm.value.user_contactNo, 
                                    this.planYear.value.plan,
                                    this.planYear.value.year,
                                    this.paymentForm.value
                                  )
                    .subscribe(data=>{
                      if(data==null) {
                        alert("Some error occurred")
                      }
                      else
                      {
                        alert("Payment is succesfully done")
                      }
                      this.router.navigate(['/userdash'])
                    })
    }
    else {
      alert("You entered an wrong OTP")
    }
  }
}
otp(){
  this.otpno=Math.floor(1000 + Math.random() * 9000);
}

get card_no()
{
  return this.paymentForm.get('card_no')
}
get cvv()
{
  return this.paymentForm.get('cvv')
}
get expiryDateOfCard()
{
  return this.paymentForm.get('expiryDateOfCard')
}



}
