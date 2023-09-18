import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { PreventiveMasterPlanComponent } from './maintenance/can/coba/preventive-master-plan/preventive-master-plan.component';
import { AddDataComponent } from './maintenance/can/coba/preventive-master-plan/add-data/add-data.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { SecMenuComponent } from './menu/sec-menu/sec-menu.component';
import { HomeGatewayComponent } from './home-gateway/home-gateway.component';
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
import { ScheduleContiWeeklyComponent } from './maintenance/can/schedule-maintenance/continous-improvement/schedule-conti-weekly/schedule-conti-weekly.component';
import { ScheduleContiDailyComponent } from './maintenance/can/schedule-maintenance/continous-improvement/schedule-conti-daily/schedule-conti-daily.component';
import { ReportMonthlyComponent } from './maintenance/can/report/report-monthly/report-monthly.component';
import { ReportWeeklyComponent } from './maintenance/can/report/report-weekly/report-weekly.component';
import { ReportDailyComponent } from './maintenance/can/report/report-daily/report-daily.component';
import { ReportDailyAddDataComponent } from './maintenance/can/report/report-daily/report-daily-add-data/report-daily-add-data.component';
import { ContinousAutonomousAddDataComponent } from './maintenance/can/master-plan/continous-improvement/autonomous-maintenance/continous-autonomous-add-data/continous-autonomous-add-data.component';
import { ContinousWeeklyAddDataComponent } from './maintenance/can/master-plan/continous-improvement/weekly-care/continous-weekly-add-data/continous-weekly-add-data.component';
import { ContinousImprovementAddDataComponent } from './maintenance/can/master-plan/continous-improvement/improvement/continous-improvement-add-data/continous-improvement-add-data.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "prev-master",
    component: PreventiveMasterPlanComponent
  },
  {
    path: "top-menu",
    component: TopMenuComponent
  },
  {
    path: "sec-menu",
    component: SecMenuComponent
  },
  {
    path: "gateway",
    component: HomeGatewayComponent
  },
  {
    path: "filling/mechanical/preventive",
    component: FilMechaPreventiveComponent
  },
  {
    path: "filling/mechanical/corective",
    component: FilMechaCorectiveComponent
  },
  {
    path: "filling/mechanical/over-haul",
    component: FilMechaOverHaulComponent
  },
  {
    path: "filling/mechanical/preventive/adddata",
    component: FillingMechaAddDataComponent
  },
  {
    path: "filling/mechanical/preventive/popup",
    component: FilMechaPopupComponent
  },
  {
    path: "filling/electrical/preventive",
    component: FilElecPreventiveComponent
  },
  {
    path: "filling/electrical/corective",
    component: FilElecCorectiveComponent
  },
  {
    path: "filling/electrical/over-haul",
    component: FilElecOverHaulComponent
  },
  {
    path: "preparation/mechanical/preventive",
    component: PreMechaPreventiveComponent
  },
  {
    path: "preparation/mechanical/corective",
    component: PreMechaCorectiveComponent
  },
  {
    path: "preparation/mechanical/over-haul",
    component: PreMechaOverHaulComponent
  },
  {
    path: "preparation/electrical/preventive",
    component: PreElecPreventiveComponent
  },
  {
    path: "preparation/electrical/corective",
    component: PreElecCorectiveComponent
  },
  {
    path: "preparation/electrical/over-haul",
    component: PreElecOverHaulComponent
  },
  {
    path: "packing/mechanical/preventive",
    component: PacMechaPreventiveComponent
  },
  {
    path: "packing/mechanical/corective",
    component: PacMechaCorectiveComponent
  },
  {
    path: "packing/mechanical/over-haul",
    component: PacMechaOverHaulComponent
  },
  {
    path: "packing/electrical/preventive",
    component: PacElecPreventiveComponent
  },
  {
    path: "packing/electrical/corective",
    component: PacElecCorectiveComponent
  },
  {
    path: "packing/electrical/over-haul",
    component: PacElecOverHaulComponent
  },
  {
    path: "continous/auto-maintenance",
    component: AutonomousMaintenanceComponent
  },
  {
    path: "continous/autonomous/add-data",
    component: ContinousAutonomousAddDataComponent
  },
  {
    path: "continous/weekly-care",
    component: WeeklyCareComponent
  },
  {
    path: "continous/weekly/add-data",
    component: ContinousWeeklyAddDataComponent
  },
  {
    path: "continous/improvement",
    component: ImprovementComponent
  },
  {
    path: "continous/improvement/add-data",
    component: ContinousImprovementAddDataComponent
  },
  {
    path: "schedule/mecha/monthly",
    component: ScheduleMechaMonthlyComponent
  },
  {
    path: "schedule/mecha/weekly",
    component: ScheduleMechaWeeklyComponent
  },
  {
    path: "schedule/mecha/daily",
    component: ScheduleMechaDailyComponent
  },
  {
    path: "schedule/elec/monthly",
    component: ScheduleElecMonthlyComponent
  },
  {
    path: "schedule/elec/weekly",
    component: ScheduleElecWeeklyComponent
  },
  {
    path: "schedule/elec/daily",
    component: ScheduleElecDailyComponent
  },
  {
    path: "schedule/conti/monthly",
    component: ScheduleContiMonthlyComponent
  },
  {
    path: "schedule/conti/monthly",
    component: ScheduleContiMonthlyComponent
  },
  {
    path: "schedule/conti/weekly",
    component: ScheduleContiWeeklyComponent
  },
  {
    path: "schedule/conti/daily",
    component: ScheduleContiDailyComponent
  },
  {
    path: "report/monthly",
    component: ReportMonthlyComponent
  },
  {
    path: "report/weekly",
    component: ReportWeeklyComponent
  },
  {
    path: "report/daily",
    component: ReportDailyComponent
  },
  {
    path: "report/daily/add-data",
    component: ReportDailyAddDataComponent
  },
  {
    path: "addData",
    component: AddDataComponent
  },
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
