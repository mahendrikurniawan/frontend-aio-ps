import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilMechaPreventiveComponent } from './filling-mecha-preventive.component';

describe('PreventiveComponent', () => {
  let component: FilMechaPreventiveComponent;
  let fixture: ComponentFixture<FilMechaPreventiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilMechaPreventiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilMechaPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
