import { TestBed } from '@angular/core/testing';

import { CafeUserService } from './cafe-user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CafeUserService = TestBed.get(CafeUserService);
    expect(service).toBeTruthy();
  });
});
