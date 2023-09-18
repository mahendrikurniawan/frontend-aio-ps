import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinousAutonomousAddDataComponent } from './continous-autonomous-add-data.component';

describe('ContinousAutonomousAddDataComponent', () => {
  let component: ContinousAutonomousAddDataComponent;
  let fixture: ComponentFixture<ContinousAutonomousAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinousAutonomousAddDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinousAutonomousAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
