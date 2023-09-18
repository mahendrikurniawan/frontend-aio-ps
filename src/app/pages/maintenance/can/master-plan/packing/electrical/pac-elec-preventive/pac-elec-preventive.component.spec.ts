import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacElecPreventiveComponent } from './pac-elec-preventive.component';

describe('PacElecPreventiveComponent', () => {
  let component: PacElecPreventiveComponent;
  let fixture: ComponentFixture<PacElecPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacElecPreventiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacElecPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
