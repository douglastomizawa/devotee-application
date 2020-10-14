import { TestBed } from '@angular/core/testing';

import { GetValuesApisPtUsService } from './get-values-apis-pt-us.service';

describe('GetValuesApisPtUsService', () => {
  let service: GetValuesApisPtUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetValuesApisPtUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
