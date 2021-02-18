import { TestBed } from '@angular/core/testing';

import { PreferencesValuesService } from './preferences-values.service';

describe('PreferencesValuesService', () => {
  let service: PreferencesValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencesValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
