import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './login/toasts-container.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AccountRoutingModule } from './account-routing.module';
// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import {
  NgbCarouselModule, NgbTooltipModule, NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    // RegisterComponent,
    LoginComponent,
    ToastsContainer,
    LandingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
    NgbToastModule,
    ScrollToModule,
    NgbCarouselModule,
    NgbTooltipModule,
    NgbCollapseModule
  ]
})
export class AccountModule { }
