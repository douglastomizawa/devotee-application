import { TestBed } from '@angular/core/testing';

import { PreferenceDistanceService } from './preference-distance.service';

describe('PreferenceDistanceService', () => {
  let service: PreferenceDistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferenceDistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
