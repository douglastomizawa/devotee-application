import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SugestionMatchesComponent } from './sugestion-matches.component';

describe('SugestionMatchesComponent', () => {
  let component: SugestionMatchesComponent;
  let fixture: ComponentFixture<SugestionMatchesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestionMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestionMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
