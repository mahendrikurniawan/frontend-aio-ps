import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacMechaCorectiveComponent } from './pac-mecha-corective.component';

describe('PacMechaCorectiveComponent', () => {
  let component: PacMechaCorectiveComponent;
  let fixture: ComponentFixture<PacMechaCorectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacMechaCorectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacMechaCorectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
