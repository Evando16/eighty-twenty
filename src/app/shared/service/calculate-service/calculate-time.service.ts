import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateTimeService {

  private readonly oneHourInSeconds: number;
  private readonly twentyPercent: number;
  private readonly eightyPercentHour: number;

  constructor() {
    this.oneHourInSeconds = 3600;
    this.twentyPercent = 0.2;
    this.eightyPercentHour = 0.8;

  }

  /**
   * 
   * @param hour 
   * @param minutes 
   * @return Twenty Percent of Time in seconds
   */
  public calculateTwentyPercent(hour: number, minutes: number): number {
    return ((hour * this.oneHourInSeconds) + minutes) * this.twentyPercent;
  }

  /**
   * 
   * @param hour 
   * @param minutes 
   * @return Twenty Percent of Time in seconds
   */
  public calculateEightyPercent(hour: number, minutes: number): number {
    return ((hour * this.oneHourInSeconds) + minutes) * this.eightyPercentHour;
  }
}
