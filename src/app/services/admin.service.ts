import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from 'src/models/Admin';
import { MotorInsurance } from 'src/models/MotorInsurance';
import { Claim } from 'src/models/Claim';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //admin!:Admin;
  baseURL:string="http://localhost:8081/admin";
  constructor(private httpSer:HttpClient) { }

public adminlogin(admin:Admin)
{
  return this.httpSer.post<boolean>(this.baseURL+'/login',admin);
}
public showallinsurance()
{
  return this.httpSer.get<MotorInsurance[]>(this.baseURL+"/dashboard/showInsurance")
}
public approveinsurance(policy_no:Number)
{
return this.httpSer.get<MotorInsurance>(this.baseURL+"/approve_insurance/"+policy_no)
}
public rejectinsurance(policy_no:Number)
{
  return this.httpSer.get<MotorInsurance>(this.baseURL+"/rejectInsurance/"+policy_no)
}

public showallclaim()
{
  return this.httpSer.get<Claim[]>(this.baseURL+"/dashboard/showClaim")
}
public approveclaim(claim_no:Number,amount:Number)
{
return this.httpSer.get<Claim>(this.baseURL+"/approve_claim/"+claim_no+"/"+amount)
}
public rejectclaim(claim_no:Number)
{
  return this.httpSer.get<Claim>(this.baseURL+"/rejectClaim/"+claim_no+"/")
}

}
