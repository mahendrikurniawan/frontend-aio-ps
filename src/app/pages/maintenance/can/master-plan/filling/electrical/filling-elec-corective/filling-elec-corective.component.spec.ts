import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingElecCorectiveComponent } from './filling-elec-corective.component';

describe('FillingElecCorectiveComponent', () => {
  let component: FillingElecCorectiveComponent;
  let fixture: ComponentFixture<FillingElecCorectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingElecCorectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillingElecCorectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
