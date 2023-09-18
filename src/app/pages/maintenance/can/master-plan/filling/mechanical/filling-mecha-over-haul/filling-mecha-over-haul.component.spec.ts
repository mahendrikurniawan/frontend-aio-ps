import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverHaulComponent } from './over-haul.component';

describe('OverHaulComponent', () => {
  let component: OverHaulComponent;
  let fixture: ComponentFixture<OverHaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverHaulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverHaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
