import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamEspecialComponent } from './iam-especial.component';

describe('IamEspecialComponent', () => {
  let component: IamEspecialComponent;
  let fixture: ComponentFixture<IamEspecialComponent>;

  beforeEach(async(() => {
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
