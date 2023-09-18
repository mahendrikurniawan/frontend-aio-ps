import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinousImprovementAddDataComponent } from './continous-improvement-add-data.component';

describe('ContinousImprovementAddDataComponent', () => {
  let component: ContinousImprovementAddDataComponent;
  let fixture: ComponentFixture<ContinousImprovementAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinousImprovementAddDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinousImprovementAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
