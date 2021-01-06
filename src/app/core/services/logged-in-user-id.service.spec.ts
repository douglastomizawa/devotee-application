import { TestBed } from '@angular/core/testing';

import { LoggedInUserIdService } from './logged-in-user-id.service';

describe('LoggedInUserIdService', () => {
  let service: LoggedInUserIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInUserIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
