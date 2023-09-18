import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDetailComponent } from './filling-mecha-popup.component';

describe('PopupDetailComponent', () => {
  let component: PopupDetailComponent;
  let fixture: ComponentFixture<PopupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
