import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamDevoteeComponent } from './iam-devotee.component';

describe('IamDevoteeComponent', () => {
  let component: IamDevoteeComponent;
  let fixture: ComponentFixture<IamDevoteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IamDevoteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamDevoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
