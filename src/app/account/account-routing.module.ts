import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
// import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: "landing",
    component: LandingComponent
  },
  // {
  //   path: "register",
  //   component: RegisterComponent
  // },
  {
    path: "login",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
