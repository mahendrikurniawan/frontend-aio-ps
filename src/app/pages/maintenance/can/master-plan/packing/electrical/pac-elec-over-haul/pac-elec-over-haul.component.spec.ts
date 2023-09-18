import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacElecOverHaulComponent } from './pac-elec-over-haul.component';

describe('PacElecOverHaulComponent', () => {
  let component: PacElecOverHaulComponent;
  let fixture: ComponentFixture<PacElecOverHaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacElecOverHaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacElecOverHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
