import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingElecPreventiveComponent } from './filling-elec-preventive.component';

describe('FillingElecPreventiveComponent', () => {
  let component: FillingElecPreventiveComponent;
  let fixture: ComponentFixture<FillingElecPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingElecPreventiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillingElecPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
