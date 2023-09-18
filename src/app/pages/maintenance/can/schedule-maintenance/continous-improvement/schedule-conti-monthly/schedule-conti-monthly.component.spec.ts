import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleContiMonthlyComponent } from './schedule-conti-monthly.component';

describe('ScheduleContiMonthlyComponent', () => {
  let component: ScheduleContiMonthlyComponent;
  let fixture: ComponentFixture<ScheduleContiMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleContiMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleContiMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
