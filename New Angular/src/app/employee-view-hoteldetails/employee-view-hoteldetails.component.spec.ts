import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewHoteldetailsComponent } from './employee-view-hoteldetails.component';

describe('EmployeeViewHoteldetailsComponent', () => {
  let component: EmployeeViewHoteldetailsComponent;
  let fixture: ComponentFixture<EmployeeViewHoteldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewHoteldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewHoteldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
