import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateAccountContinueComponent } from './create-account-continue.component';

describe('CreateAccountContinueComponent', () => {
  let component: CreateAccountContinueComponent;
  let fixture: ComponentFixture<CreateAccountContinueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountContinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
