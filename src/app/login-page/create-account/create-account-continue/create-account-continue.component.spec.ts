import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountContinueComponent } from './create-account-continue.component';

describe('CreateAccountContinueComponent', () => {
  let component: CreateAccountContinueComponent;
  let fixture: ComponentFixture<CreateAccountContinueComponent>;

  beforeEach(async(() => {
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
