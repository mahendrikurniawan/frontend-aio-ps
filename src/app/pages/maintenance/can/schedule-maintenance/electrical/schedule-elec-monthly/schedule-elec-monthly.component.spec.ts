import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleElecMonthlyComponent } from './schedule-elec-monthly.component';

describe('ScheduleElecMonthlyComponent', () => {
  let component: ScheduleElecMonthlyComponent;
  let fixture: ComponentFixture<ScheduleElecMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleElecMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleElecMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
