import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMechaMonthlyComponent } from './schedule-mecha-monthly.component';

describe('ScheduleMechaMonthlyComponent', () => {
  let component: ScheduleMechaMonthlyComponent;
  let fixture: ComponentFixture<ScheduleMechaMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleMechaMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMechaMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
