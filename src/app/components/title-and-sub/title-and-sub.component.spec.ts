import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndSubComponent } from './title-and-sub.component';

describe('TitleAndSubComponent', () => {
  let component: TitleAndSubComponent;
  let fixture: ComponentFixture<TitleAndSubComponent>;

  beforeEach(async(() => {
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
