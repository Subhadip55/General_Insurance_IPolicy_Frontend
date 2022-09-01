import { Component, NgModule, Renderer2 } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BuyComponent } from './buy/buy.component';
import { CalculatepremiumComponent } from './calculatepremium/calculatepremium.component';
import { ClaimComponent } from './claim/claim.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PlanComponent } from './plan/plan.component';
import { RegistrationComponent } from './registration/registration.component';
import { RenewComponent } from './renew/renew.component';

const routes: Routes = [
  
    // { path: '**', redirectTo: '/Home', pathMatch: 'full' },
{
  component:HomeComponent,
  path:'Home'
},
{
component:ContactComponent,
path:'Contact'
},
{
  component:FaqComponent,
  path:'FAQ'
},
{
  component:AboutusComponent,
  path:'About'
},
{
component:LoginComponent,
path:'Login'
},
{
component:CalculatepremiumComponent,
path:'Calculate'
},
{
  component:CustomerDashboardComponent,
  path:'userdash'
},
{
component:BuyComponent,
path:'buy'
},
{
  component:PlanComponent,
  path:'plan'
},
{
component:PaymentComponent,
path:'payment'
},
{
component:AdminloginComponent,
path:'AdminLogIn'
},
{
  component:AdminDashboardComponent,
  path:'Admindash'
},
{
  component:RenewComponent,
  path:'renew'
},
{
  component:ClaimComponent,
  path:'claim'
},
{
  component:RegistrationComponent,
  path:'register'
},
{
  component:ForgotpasswordComponent,
  path:'fpw'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
