import { TestBed } from '@angular/core/testing';

import { SexualOrientationService } from './sexual-orientation.service';

describe('SexualOrientationService', () => {
  let service: SexualOrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SexualOrientationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
