import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsModalComponent } from './apps-modal.component';

describe('AppsModalComponent', () => {
  let component: AppsModalComponent;
  let fixture: ComponentFixture<AppsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
