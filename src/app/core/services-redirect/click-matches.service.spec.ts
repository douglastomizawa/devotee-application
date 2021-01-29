import { TestBed } from '@angular/core/testing';

import { ClickMatchesService } from './click-matches.service';

describe('ClickMatchesService', () => {
  let service: ClickMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
