import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMechaPreventiveComponent } from './pre-mecha-preventive.component';

describe('PreMechaPreventiveComponent', () => {
  let component: PreMechaPreventiveComponent;
  let fixture: ComponentFixture<PreMechaPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreMechaPreventiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreMechaPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
