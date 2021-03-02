import { TestBed } from '@angular/core/testing';

import { InterestAtualizationService } from './interest-atualization.service';

describe('InterestAtualizationService', () => {
  let service: InterestAtualizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestAtualizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
