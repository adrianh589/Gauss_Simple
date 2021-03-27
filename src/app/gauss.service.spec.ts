import { TestBed } from '@angular/core/testing';

import { GaussService } from './gauss.service';

describe('GaussService', () => {
  let service: GaussService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaussService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
