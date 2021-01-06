import { TestBed } from '@angular/core/testing';

import { PerfilLikesService } from './perfil-likes.service';

describe('PerfilLikesService', () => {
  let service: PerfilLikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilLikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
