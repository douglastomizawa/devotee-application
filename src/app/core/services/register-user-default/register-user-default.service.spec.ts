import { TestBed } from '@angular/core/testing';

import { RegisterUserDefaultService } from './register-user-default.service';

describe('RegisterUserDefaultService', () => {
  let service: RegisterUserDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUserDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
