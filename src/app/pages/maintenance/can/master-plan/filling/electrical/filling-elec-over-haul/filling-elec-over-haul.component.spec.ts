import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingElecOverHaulComponent } from './filling-elec-over-haul.component';

describe('FillingElecOverHaulComponent', () => {
  let component: FillingElecOverHaulComponent;
  let fixture: ComponentFixture<FillingElecOverHaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingElecOverHaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillingElecOverHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
