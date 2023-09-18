import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleElecWeeklyComponent } from './schedule-elec-weekly.component';

describe('ScheduleElecWeeklyComponent', () => {
  let component: ScheduleElecWeeklyComponent;
  let fixture: ComponentFixture<ScheduleElecWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleElecWeeklyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleElecWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
