import { TestBed } from '@angular/core/testing';

import { NameInstrumentoService } from './name-instrumento.service';

describe('NameInstrumentoService', () => {
  let service: NameInstrumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameInstrumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
