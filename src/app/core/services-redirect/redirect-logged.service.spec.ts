import { TestBed } from '@angular/core/testing';

import { RedirectLoggedService } from './redirect-logged.service';

describe('RedirectLoggedService', () => {
  let service: RedirectLoggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectLoggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
