import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMechaWeeklyComponent } from './schedule-mecha-weekly.component';

describe('ScheduleMechaWeeklyComponent', () => {
  let component: ScheduleMechaWeeklyComponent;
  let fixture: ComponentFixture<ScheduleMechaWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleMechaWeeklyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMechaWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
