import { TestBed } from '@angular/core/testing';

import { RangeAgeService } from './range-age.service';

describe('RangeAgeService', () => {
  let service: RangeAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangeAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
