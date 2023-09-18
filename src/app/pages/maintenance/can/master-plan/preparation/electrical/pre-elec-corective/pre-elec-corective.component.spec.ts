import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreElecCorectiveComponent } from './pre-elec-corective.component';

describe('PreElecCorectiveComponent', () => {
  let component: PreElecCorectiveComponent;
  let fixture: ComponentFixture<PreElecCorectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreElecCorectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreElecCorectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
