import { TestBed } from '@angular/core/testing';

import { SavePhoneNumberService } from './save-phone-number.service';

describe('SavePhoneNumberService', () => {
  let service: SavePhoneNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavePhoneNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
