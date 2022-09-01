import { Payment } from "./Payment";
import { User } from "./User"

export class MotorInsurance
{
    policy_no:number=0;
    type:string='';
    manufacturer:string='';
    model:string='';
    dateOfExpiry:Date=new Date();
    purchase_date:Date=new Date();
    registration_no:string='';
    engine_no:string='';
    chasis_no:string='';
    plan:string='';
    year:number=0;
    claimed:boolean=false;
    approved:boolean=false;
    message: string= '';
   user:User=new User();
   payment:Payment=new Payment();
}