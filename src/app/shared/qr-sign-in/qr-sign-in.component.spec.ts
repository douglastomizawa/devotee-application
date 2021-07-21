import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRSignInComponent } from './qr-sign-in.component';

describe('QRSignInComponent', () => {
  let component: QRSignInComponent;
  let fixture: ComponentFixture<QRSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
