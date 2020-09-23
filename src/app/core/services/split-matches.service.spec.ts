import { TestBed } from '@angular/core/testing';

import { SplitMatchesService } from './split-matches.service';

describe('SplitMatchesService', () => {
  let service: SplitMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
