import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleContiWeeklyComponent } from './schedule-conti-weekly.component';

describe('ScheduleContiWeeklyComponent', () => {
  let component: ScheduleContiWeeklyComponent;
  let fixture: ComponentFixture<ScheduleContiWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleContiWeeklyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleContiWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
