import { TestBed } from '@angular/core/testing';

import { BlockInitialPageService } from './block-initial-page.guard.service';

describe('BlockInitialPageService', () => {
  let service: BlockInitialPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockInitialPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
