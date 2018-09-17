import { TestBed, inject } from '@angular/core/testing';

import { CalculateTimeService } from './calculate-time.service';

describe('CalculateTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateTimeService]
    });
  });

  it('should be created', inject([CalculateTimeService], (service: CalculateTimeService) => {
    expect(service).toBeTruthy();
  }));
});
