import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { CalculatepremiumComponent } from './calculatepremium/calculatepremium.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { BuyComponent } from './buy/buy.component';
import { PlanComponent } from './plan/plan.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RenewComponent } from './renew/renew.component';
import { ClaimComponent } from './claim/claim.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FaqComponent,
    AboutusComponent,
    LoginComponent,
    CalculatepremiumComponent,
    CustomerDashboardComponent,
    BuyComponent,
    PlanComponent,
    PaymentComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    RenewComponent,
    ClaimComponent,
    RegistrationComponent,
    ForgotpasswordComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
