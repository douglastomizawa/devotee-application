import { TestBed } from '@angular/core/testing';

import { RedirectCreateContinueService } from './redirect-create-continue.service';

describe('RedirectCreateContinueService', () => {
  let service: RedirectCreateContinueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectCreateContinueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
