import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangeIamDevoteeComponent } from './change-iam-devotee.component';

describe('IamDevoteeComponent', () => {
  let component: ChangeIamDevoteeComponent;
  let fixture: ComponentFixture<ChangeIamDevoteeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeIamDevoteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIamDevoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
