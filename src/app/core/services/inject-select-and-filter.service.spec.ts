import { TestBed } from '@angular/core/testing';

import { InjectSelectAndFilterService } from './inject-select-and-filter.service';

describe('InjectSelectAndFilterService', () => {
  let service: InjectSelectAndFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectSelectAndFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
