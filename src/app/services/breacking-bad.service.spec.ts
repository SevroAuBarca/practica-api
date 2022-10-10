import { TestBed } from '@angular/core/testing';

import { BreackingBadService } from './breacking-bad.service';

describe('BreackingBadService', () => {
  let service: BreackingBadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreackingBadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
