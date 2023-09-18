import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMaintComponent } from './schedule-maint.component';

describe('ScheduleMaintComponent', () => {
  let component: ScheduleMaintComponent;
  let fixture: ComponentFixture<ScheduleMaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleMaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleMaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
