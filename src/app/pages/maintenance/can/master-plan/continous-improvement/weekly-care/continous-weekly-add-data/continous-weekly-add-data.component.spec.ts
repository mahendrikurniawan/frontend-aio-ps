import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinousWeeklyAddDataComponent } from './continous-weekly-add-data.component';

describe('ContinousWeeklyAddDataComponent', () => {
  let component: ContinousWeeklyAddDataComponent;
  let fixture: ComponentFixture<ContinousWeeklyAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinousWeeklyAddDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinousWeeklyAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
