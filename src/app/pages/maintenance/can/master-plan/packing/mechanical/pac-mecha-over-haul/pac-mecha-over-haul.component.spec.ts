import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacMechaOverHaulComponent } from './pac-mecha-over-haul.component';

describe('PacMechaOverHaulComponent', () => {
  let component: PacMechaOverHaulComponent;
  let fixture: ComponentFixture<PacMechaOverHaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacMechaOverHaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacMechaOverHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
