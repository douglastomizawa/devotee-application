import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TitleAndSubComponent } from './title-and-sub.component';

describe('TitleAndSubComponent', () => {
  let component: TitleAndSubComponent;
  let fixture: ComponentFixture<TitleAndSubComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAndSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAndSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
