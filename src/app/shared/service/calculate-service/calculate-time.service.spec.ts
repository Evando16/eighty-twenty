import { TestBed, inject } from '@angular/core/testing';

import { CalculateTimeService } from './calculate-time.service';

describe('CalculateTimeService', () => {
  let service: CalculateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateTimeService]
    });
    
    service = TestBed.get(CalculateTimeService);
  });

  describe('Unit tests', ()=>{
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should calculate the twenty percent of total time',()=>{
      const hour = 8;
      const minutes = 30;
      const expectSeconds = 5766;
  
      const twentyResult = service.calculateTwentyPercent(hour, minutes);
  
      expect(twentyResult).toEqual(expectSeconds);
    });
  
  
    it('should calculate the eighty percent of total time',()=>{
      const hour = 8;
      const minutes = 30;
      const expectSeconds = 23064;
  
      const twentyResult = service.calculateEightyPercent(hour, minutes);
  
      expect(twentyResult).toEqual(expectSeconds);
    });
  });
});
