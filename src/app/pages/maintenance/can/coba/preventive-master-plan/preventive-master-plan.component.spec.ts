import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveMasterPlanComponent } from './preventive-master-plan.component';

describe('PreventiveMasterPlanComponent', () => {
  let component: PreventiveMasterPlanComponent;
  let fixture: ComponentFixture<PreventiveMasterPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventiveMasterPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventiveMasterPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
