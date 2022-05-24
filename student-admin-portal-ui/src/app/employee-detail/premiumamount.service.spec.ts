import { TestBed } from '@angular/core/testing';

import { PremiumamountService } from './premiumamount.service';

describe('PremiumamountService', () => {
  let service: PremiumamountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiumamountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
