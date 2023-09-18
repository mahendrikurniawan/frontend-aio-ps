import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreElecOverHaulComponent } from './pre-elec-over-haul.component';

describe('PreElecOverHaulComponent', () => {
  let component: PreElecOverHaulComponent;
  let fixture: ComponentFixture<PreElecOverHaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreElecOverHaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreElecOverHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
