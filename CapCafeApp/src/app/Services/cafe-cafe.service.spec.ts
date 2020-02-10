import { TestBed } from '@angular/core/testing';

import { CafeCafeService } from './cafe-cafe.service';

describe('CafeCafeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CafeCafeService = TestBed.get(CafeCafeService);
    expect(service).toBeTruthy();
  });
});
