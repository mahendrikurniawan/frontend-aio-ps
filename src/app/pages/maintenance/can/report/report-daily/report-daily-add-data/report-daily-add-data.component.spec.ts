import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDailyAddDataComponent } from './report-daily-add-data.component';

describe('ReportDailyAddDataComponent', () => {
  let component: ReportDailyAddDataComponent;
  let fixture: ComponentFixture<ReportDailyAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDailyAddDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDailyAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
