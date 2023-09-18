import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbToastModule, NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import {
  NgbCarouselModule, NgbTooltipModule, NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FullCalendarModule } from '@fullcalendar/angular';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { DatePipe } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { MatRippleModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

// Pages Routing
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { ToastsContainer } from './dashboards/dashboard/toasts-container.component';
import { DashboardsModule } from "./dashboards/dashboards.module";
import { PreventiveMasterPlanComponent } from './maintenance/can/coba/preventive-master-plan/preventive-master-plan.component';
import { AddDataComponent } from './maintenance/can/coba/preventive-master-plan/add-data/add-data.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { SecMenuComponent } from './menu/sec-menu/sec-menu.component';
import { HomeGatewayComponent } from './home-gateway/home-gateway.component';
import { AppsModalComponent } from './home-gateway/apps-modal/apps-modal.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FilMechaPreventiveComponent } from './maintenance/can/master-plan/filling/mechanical/filling-mecha-preventive/filling-mecha-preventive.component';
import { FilMechaCorectiveComponent } from './maintenance/can/master-plan/filling/mechanical/filling-mecha-corective/filling-mecha-corective.component';
import { FilMechaOverHaulComponent } from './maintenance/can/master-plan/filling/mechanical/filling-mecha-over-haul/filling-mecha-over-haul.component';
import { FilMechaPopupComponent } from './maintenance/can/master-plan/filling/mechanical/filling-mecha-preventive/filling-mecha-popup/filling-mecha-popup.component';
import { FillingMechaAddDataComponent } from './maintenance/can/master-plan/filling/mechanical/filling-mecha-preventive/filling-mecha-add-data/filling-mecha-add-data.component';
import { FilElecPreventiveComponent } from './maintenance/can/master-plan/filling/electrical/filling-elec-preventive/filling-elec-preventive.component';
import { FilElecCorectiveComponent } from './maintenance/can/master-plan/filling/electrical/filling-elec-corective/filling-elec-corective.component';
import { FilElecOverHaulComponent } from './maintenance/can/master-plan/filling/electrical/filling-elec-over-haul/filling-elec-over-haul.component';
import { PreMechaPreventiveComponent } from './maintenance/can/master-plan/preparation/mechanical/pre-mecha-preventive/pre-mecha-preventive.component';
import { PreMechaCorectiveComponent } from './maintenance/can/master-plan/preparation/mechanical/pre-mecha-corective/pre-mecha-corective.component';
import { PreMechaOverHaulComponent } from './maintenance/can/master-plan/preparation/mechanical/pre-mecha-over-haul/pre-mecha-over-haul.component';
import { PreElecPreventiveComponent } from './maintenance/can/master-plan/preparation/electrical/pre-elec-preventive/pre-elec-preventive.component';
import { PreElecCorectiveComponent } from './maintenance/can/master-plan/preparation/electrical/pre-elec-corective/pre-elec-corective.component';
import { PreElecOverHaulComponent } from './maintenance/can/master-plan/preparation/electrical/pre-elec-over-haul/pre-elec-over-haul.component';
import { PacMechaPreventiveComponent } from './maintenance/can/master-plan/packing/mechanical/pac-mecha-preventive/pac-mecha-preventive.component';
import { PacMechaCorectiveComponent } from './maintenance/can/master-plan/packing/mechanical/pac-mecha-corective/pac-mecha-corective.component';
import { PacMechaOverHaulComponent } from './maintenance/can/master-plan/packing/mechanical/pac-mecha-over-haul/pac-mecha-over-haul.component';
import { PacElecPreventiveComponent } from './maintenance/can/master-plan/packing/electrical/pac-elec-preventive/pac-elec-preventive.component';
import { PacElecCorectiveComponent } from './maintenance/can/master-plan/packing/electrical/pac-elec-corective/pac-elec-corective.component';
import { PacElecOverHaulComponent } from './maintenance/can/master-plan/packing/electrical/pac-elec-over-haul/pac-elec-over-haul.component';
import { AutonomousMaintenanceComponent } from './maintenance/can/master-plan/continous-improvement/autonomous-maintenance/autonomous-maintenance.component';
import { WeeklyCareComponent } from './maintenance/can/master-plan/continous-improvement/weekly-care/weekly-care.component';
import { ImprovementComponent } from './maintenance/can/master-plan/continous-improvement/improvement/improvement.component';
import { ScheduleMechaMonthlyComponent } from './maintenance/can/schedule-maintenance/mechanical/schedule-mecha-monthly/schedule-mecha-monthly.component';
import { ScheduleMechaWeeklyComponent } from './maintenance/can/schedule-maintenance/mechanical/schedule-mecha-weekly/schedule-mecha-weekly.component';
import { ScheduleMechaDailyComponent } from './maintenance/can/schedule-maintenance/mechanical/schedule-mecha-daily/schedule-mecha-daily.component';
import { ScheduleElecMonthlyComponent } from './maintenance/can/schedule-maintenance/electrical/schedule-elec-monthly/schedule-elec-monthly.component';
import { ScheduleElecWeeklyComponent } from './maintenance/can/schedule-maintenance/electrical/schedule-elec-weekly/schedule-elec-weekly.component';
import { ScheduleElecDailyComponent } from './maintenance/can/schedule-maintenance/electrical/schedule-elec-daily/schedule-elec-daily.component';
import { ScheduleContiMonthlyComponent } from './maintenance/can/schedule-maintenance/continous-improvement/schedule-conti-monthly/schedule-conti-monthly.component';
import { ScheduleContiDailyComponent } from './maintenance/can/schedule-maintenance/continous-improvement/schedule-conti-daily/schedule-conti-daily.component';
import { ScheduleContiWeeklyComponent } from './maintenance/can/schedule-maintenance/continous-improvement/schedule-conti-weekly/schedule-conti-weekly.component';
import { ReportDailyComponent } from './maintenance/can/report/report-daily/report-daily.component';
import { ReportWeeklyComponent } from './maintenance/can/report/report-weekly/report-weekly.component';
import { ReportMonthlyComponent } from './maintenance/can/report/report-monthly/report-monthly.component';
import { ReportDailyAddDataComponent } from './maintenance/can/report/report-daily/report-daily-add-data/report-daily-add-data.component';
import { ContinousAutonomousAddDataComponent } from './maintenance/can/master-plan/continous-improvement/autonomous-maintenance/continous-autonomous-add-data/continous-autonomous-add-data.component';
import { ContinousWeeklyAddDataComponent } from './maintenance/can/master-plan/continous-improvement/weekly-care/continous-weekly-add-data/continous-weekly-add-data.component';
import { ContinousImprovementAddDataComponent } from './maintenance/can/master-plan/continous-improvement/improvement/continous-improvement-add-data/continous-improvement-add-data.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ToastsContainer,
    PreventiveMasterPlanComponent,
    AddDataComponent,
    TopMenuComponent,
    SecMenuComponent,
    HomeGatewayComponent,
    AppsModalComponent,
    FilMechaPreventiveComponent,
    FilMechaCorectiveComponent,
    FilMechaOverHaulComponent,
    FilMechaPopupComponent,
    FillingMechaAddDataComponent,
    FilElecPreventiveComponent,
    FilElecCorectiveComponent,
    FilElecOverHaulComponent,
    PreMechaPreventiveComponent,
    PreMechaCorectiveComponent,
    PreMechaOverHaulComponent,
    PreElecPreventiveComponent,
    PreElecCorectiveComponent,
    PreElecOverHaulComponent,
    PacMechaPreventiveComponent,
    PacMechaCorectiveComponent,
    PacMechaOverHaulComponent,
    PacElecPreventiveComponent,
    PacElecCorectiveComponent,
    PacElecOverHaulComponent,
    AutonomousMaintenanceComponent,
    WeeklyCareComponent,
    ImprovementComponent,
    ScheduleMechaMonthlyComponent,
    ScheduleMechaWeeklyComponent,
    ScheduleMechaDailyComponent,
    ScheduleElecMonthlyComponent,
    ScheduleElecWeeklyComponent,
    ScheduleElecDailyComponent,
    ScheduleContiMonthlyComponent,
    ScheduleContiDailyComponent,
    ScheduleContiWeeklyComponent,
    ReportDailyComponent,
    ReportWeeklyComponent,
    ReportMonthlyComponent,
    ReportDailyAddDataComponent,
    ContinousAutonomousAddDataComponent,
    ContinousWeeklyAddDataComponent,
    ContinousImprovementAddDataComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    PagesRoutingModule,
    SharedModule,
    NgxUsefulSwiperModule,
    LightboxModule,
    DashboardsModule,
    NgbCarouselModule,
    NgbTooltipModule,
    NgbCollapseModule,
    ScrollToModule,
    DropzoneModule,
    MdbModalModule,
    MatRippleModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [
  DatePipe,
],
})
export class PagesModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
