/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginAuthServiceService } from './login-auth-service.service';

describe('Service: LoginAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthServiceService]
    });
  });

  it('should ...', inject([LoginAuthServiceService], (service: LoginAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
  
