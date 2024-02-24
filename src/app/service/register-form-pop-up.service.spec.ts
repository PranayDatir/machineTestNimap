import { TestBed } from '@angular/core/testing';

import { RegisterFormPopUpService } from './register-form-pop-up.service';

describe('RegisterFormPopUpService', () => {
  let service: RegisterFormPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFormPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
