import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacElecCorectiveComponent } from './pac-elec-corective.component';

describe('PacElecCorectiveComponent', () => {
  let component: PacElecCorectiveComponent;
  let fixture: ComponentFixture<PacElecCorectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacElecCorectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacElecCorectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
