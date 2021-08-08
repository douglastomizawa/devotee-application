import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangeIamEspecialComponent } from './change-iam-especial.component';

describe('IamEspecialComponent', () => {
  let component: ChangeIamEspecialComponent;
  let fixture: ComponentFixture<ChangeIamEspecialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeIamEspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIamEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
