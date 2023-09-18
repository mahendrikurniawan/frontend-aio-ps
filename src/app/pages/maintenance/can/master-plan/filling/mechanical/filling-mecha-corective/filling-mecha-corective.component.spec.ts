import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorectiveComponent } from './filling-mecha-corective.component';

describe('CorectiveComponent', () => {
  let component: CorectiveComponent;
  let fixture: ComponentFixture<CorectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
