/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CartitemsService } from './cartitems.service';

describe('Service: Cartitems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartitemsService]
    });
  });

  it('should ...', inject([CartitemsService], (service: CartitemsService) => {
    expect(service).toBeTruthy();
  }));
});
