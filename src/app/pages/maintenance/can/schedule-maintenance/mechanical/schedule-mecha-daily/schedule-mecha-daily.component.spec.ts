import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMechaDailyComponent } from './schedule-mecha-daily.component';

describe('ScheduleMechaDailyComponent', () => {
  let component: ScheduleMechaDailyComponent;
  let fixture: ComponentFixture<ScheduleMechaDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleMechaDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMechaDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
