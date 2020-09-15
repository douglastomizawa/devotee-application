import { TestBed } from '@angular/core/testing';

import { UserFactory} from './user.factory.service';

describe('UserFactoryService', () => {
  let service: UserFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
