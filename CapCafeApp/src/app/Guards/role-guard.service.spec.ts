import { TestBed } from '@angular/core/testing';

import { UserLoginGuardService } from './user-login-guard.service';

describe('UserLoginGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoginGuardService = TestBed.get(UserLoginGuardService);
    expect(service).toBeTruthy();
  });
});
