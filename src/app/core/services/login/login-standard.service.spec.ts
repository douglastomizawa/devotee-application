import { TestBed } from '@angular/core/testing';

import { LoginStandardService } from './login-standard.service';

describe('LoginStandardService', () => {
  let service: LoginStandardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginStandardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
