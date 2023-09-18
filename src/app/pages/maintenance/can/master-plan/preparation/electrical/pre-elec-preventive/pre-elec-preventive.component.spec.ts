import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreElecPreventiveComponent } from './pre-elec-preventive.component';

describe('PreElecPreventiveComponent', () => {
  let component: PreElecPreventiveComponent;
  let fixture: ComponentFixture<PreElecPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreElecPreventiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreElecPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
