/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { CidsService } from './cids.service';

describe('Service: Cids', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CidsService]
    });
  });

  it('should ...', inject([CidsService], (service: CidsService) => {
    expect(service).toBeTruthy();
  }));
});
