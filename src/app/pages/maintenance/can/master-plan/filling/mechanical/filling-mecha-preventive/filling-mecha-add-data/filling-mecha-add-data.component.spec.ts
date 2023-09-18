import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingMechaAddDataComponent } from './filling-mecha-add-data.component';

describe('FillingMechaAddDataComponent', () => {
  let component: FillingMechaAddDataComponent;
  let fixture: ComponentFixture<FillingMechaAddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingMechaAddDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillingMechaAddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
