import { TestBed } from '@angular/core/testing';

import { Rotas } from './rotas';

describe('Rotas', () => {
  let service: Rotas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rotas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
