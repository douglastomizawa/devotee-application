import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IamEspecialComponent } from './iam-especial.component';

describe('IamEspecialComponent', () => {
  let component: IamEspecialComponent;
  let fixture: ComponentFixture<IamEspecialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IamEspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
