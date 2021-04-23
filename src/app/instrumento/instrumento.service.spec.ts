import { TestBed } from '@angular/core/testing';

import { InstrumentoService } from './instrumento.service';

describe('InstrumentoService', () => {
  let service: InstrumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
