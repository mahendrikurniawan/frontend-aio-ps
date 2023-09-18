import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacMechaPreventiveComponent } from './pac-mecha-preventive.component';

describe('PacMechaPreventiveComponent', () => {
  let component: PacMechaPreventiveComponent;
  let fixture: ComponentFixture<PacMechaPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacMechaPreventiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacMechaPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
