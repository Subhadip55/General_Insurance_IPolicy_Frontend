import { MotorInsurance } from "./MotorInsurance";

export class Claim
{
    claim_no:number=0;
    date_of_apply:Date=new Date();
    approved:boolean=false;
    accident_type:string='';
    amount:number=0;
    message:string='';
    insurance:MotorInsurance= new MotorInsurance();
}