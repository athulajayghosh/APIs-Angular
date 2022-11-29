import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingApiComponent } from './shopping-api.component';

describe('ShoppingApiComponent', () => {
  let component: ShoppingApiComponent;
  let fixture: ComponentFixture<ShoppingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
