import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCareComponent } from './weekly-care.component';

describe('WeeklyCareComponent', () => {
  let component: WeeklyCareComponent;
  let fixture: ComponentFixture<WeeklyCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
