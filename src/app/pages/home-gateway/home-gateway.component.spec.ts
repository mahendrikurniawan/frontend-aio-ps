import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGatewayComponent } from './home-gateway.component';

describe('HomeGatewayComponent', () => {
  let component: HomeGatewayComponent;
  let fixture: ComponentFixture<HomeGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
