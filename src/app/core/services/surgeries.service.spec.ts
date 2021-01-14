import { TestBed } from '@angular/core/testing';

import { SurgeriesService } from './surgeries.service';

describe('SurgeryService', () => {
  let service: SurgeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurgeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
