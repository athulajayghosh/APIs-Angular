import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsDataAPIComponent } from './us-data-api.component';

describe('UsDataAPIComponent', () => {
  let component: UsDataAPIComponent;
  let fixture: ComponentFixture<UsDataAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsDataAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsDataAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
