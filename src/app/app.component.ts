import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeneralInsurance';
  visible=true;
  visible1=true;
  constructor( private router:Router) {}
  

  login()
  {
    if(sessionStorage.getItem("email")==null)
    {
      this.visible=false
      this.visible1=true;
    }

  }

logout()
{
  sessionStorage.clear();
  this.visible1=false;
  this.visible=true;
  this.router.navigate(['/Home'])
}

check()
{
  if(sessionStorage.getItem("email")!=null)
  {
    this.router.navigate(['/userdash'])
  }
  else
  {
  this.router.navigate(['/Home'])
  }
}


adminlogin()
{
  if(sessionStorage.getItem("email")==null)
  {
    this.visible=false
    this.visible1=true;
  }

}

}
