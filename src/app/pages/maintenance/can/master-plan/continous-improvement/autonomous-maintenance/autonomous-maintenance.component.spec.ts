import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomousMaintenanceComponent } from './autonomous-maintenance.component';

describe('AutonomousMaintenanceComponent', () => {
  let component: AutonomousMaintenanceComponent;
  let fixture: ComponentFixture<AutonomousMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomousMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutonomousMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
