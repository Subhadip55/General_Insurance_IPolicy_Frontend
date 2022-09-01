import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from 'src/models/Claim';
import { MotorInsurance } from 'src/models/MotorInsurance';
import { Payment } from 'src/models/Payment';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string="http://localhost:8081/userapp";
  constructor(private httpSer:HttpClient) { }

  public createUserRegistration(userData: User) {
    return this.httpSer.post<User>(this.baseURL+"/users", userData);
  }

  // public successfullLogin(email: string, psw: string) {
  //   return this.httpSer.get<any>(this.baseURL+"/login"+"/"+email+"/"+psw);
  // }
  public successfullLogin(obj: any) {
    return this.httpSer.post<User>(this.baseURL+"/login", obj);
  }

  public resetPassword(obj: any) {
    return this.httpSer.post<User>(this.baseURL+"/reset_password",obj);

  }

  public calculatePremium(type: String, model_name: String, age: Number) {
    return this.httpSer.get<Number>(this.baseURL+"/calculateInsuranceEstimate/"+type+"/"+model_name+"/"+age);
  }

  public buyInsurance(email: String, obj: any) {
    //console.log(email);
    return this.httpSer.post<MotorInsurance>(this.baseURL+"/buy_insurance/"+email, obj);
  }

  public showInsuranceList(email: String) {
    return this.httpSer.get<MotorInsurance[]>(this.baseURL+"/insuranceDetails/"+email);
  }

  public showInsuranceByPolicyNo(policyNo: number) {
    return this.httpSer.get<MotorInsurance>(this.baseURL+"/insurance/"+policyNo);
  }

  public renewInsurance(policy_no: String, email: String, user_contactNo: Number, plan:String, year: Number, payment: Payment) {
    return this.httpSer.put<MotorInsurance>(this.baseURL+"/renewInsurance/"+policy_no+"/"+email+"/"+user_contactNo+"/"+plan+"/"+year, payment);
  }
  public claimInsurance(policy_no: String,user_contactNo: Number, obj:Claim)
  {
    return this.httpSer.post<Claim>(this.baseURL+"/claim/"+policy_no+"/"+user_contactNo,obj);
  }
  public showclaimList(email: String)
  {
    return this.httpSer.get<Claim[]>(this.baseURL+"/claimHistory/"+email);
  }
}