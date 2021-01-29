import { TestBed } from '@angular/core/testing';

import { LikeApiService } from './like-api.service';

describe('LikeApiService', () => {
  let service: LikeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
