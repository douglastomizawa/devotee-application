import { TestBed } from '@angular/core/testing';

import { ChatAndMatchesService } from './chat-and-matches.service';

describe('ChatAndMatchesService', () => {
  let service: ChatAndMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatAndMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
