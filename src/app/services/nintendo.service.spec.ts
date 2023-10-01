import { TestBed } from '@angular/core/testing';

import { NintendoService } from './nintendo.service';

describe('NintendoService', () => {
  let service: NintendoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NintendoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
