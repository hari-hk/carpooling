import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeailComponent } from './user-deail.component';

describe('UserDeailComponent', () => {
  let component: UserDeailComponent;
  let fixture: ComponentFixture<UserDeailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
