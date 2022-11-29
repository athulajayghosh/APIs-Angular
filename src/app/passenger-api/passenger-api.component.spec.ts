import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerAPIComponent } from './passenger-api.component';

describe('PassengerAPIComponent', () => {
  let component: PassengerAPIComponent;
  let fixture: ComponentFixture<PassengerAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
