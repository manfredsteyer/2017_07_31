import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardComponent } from './flight-card.component';

xdescribe('FlightCardComponent', () => {
  let component: FlightCardComponent;
  let fixture: ComponentFixture<FlightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
