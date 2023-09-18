import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleElecDailyComponent } from './schedule-elec-daily.component';

describe('ScheduleElecDailyComponent', () => {
  let component: ScheduleElecDailyComponent;
  let fixture: ComponentFixture<ScheduleElecDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleElecDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleElecDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
