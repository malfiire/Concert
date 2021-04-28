import { TestBed } from '@angular/core/testing';

import { MusicoService } from './musico.service';

describe('MusicoService', () => {
  let service: MusicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
