import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleContiDailyComponent } from './schedule-conti-daily.component';

describe('ScheduleContiDailyComponent', () => {
  let component: ScheduleContiDailyComponent;
  let fixture: ComponentFixture<ScheduleContiDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleContiDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleContiDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
