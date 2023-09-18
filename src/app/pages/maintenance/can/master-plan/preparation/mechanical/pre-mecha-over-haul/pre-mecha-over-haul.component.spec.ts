import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMechaOverHaulComponent } from './pre-mecha-over-haul.component';

describe('PreMechaOverHaulComponent', () => {
  let component: PreMechaOverHaulComponent;
  let fixture: ComponentFixture<PreMechaOverHaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreMechaOverHaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreMechaOverHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
