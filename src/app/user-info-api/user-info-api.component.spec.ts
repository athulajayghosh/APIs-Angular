import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoApiComponent } from './user-info-api.component';

describe('UserInfoApiComponent', () => {
  let component: UserInfoApiComponent;
  let fixture: ComponentFixture<UserInfoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
