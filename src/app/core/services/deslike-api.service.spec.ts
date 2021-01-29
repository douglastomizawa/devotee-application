import { TestBed } from '@angular/core/testing';

import { DeslikeApiService } from './deslike-api.service';

describe('DeslikeApiService', () => {
  let service: DeslikeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeslikeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
