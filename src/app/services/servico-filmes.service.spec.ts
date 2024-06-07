/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicoFilmesService } from './servico-filmes.service';

describe('Service: ServicoFilmes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoFilmesService]
    });
  });

  it('should ...', inject([ServicoFilmesService], (service: ServicoFilmesService) => {
    expect(service).toBeTruthy();
  }));
});
