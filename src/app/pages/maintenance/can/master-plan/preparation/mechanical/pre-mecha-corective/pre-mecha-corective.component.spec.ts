import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreMechaCorectiveComponent } from './pre-mecha-corective.component';

describe('PreMechaCorectiveComponent', () => {
  let component: PreMechaCorectiveComponent;
  let fixture: ComponentFixture<PreMechaCorectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreMechaCorectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreMechaCorectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
