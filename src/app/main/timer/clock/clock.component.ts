import { Component, OnInit } from '@angular/core';
import { Time } from './time.model';
import { CalculateTimeService } from '../../../shared/service/calculate-service/calculate-time.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  public time = {} as Time;
  public twentyPercentHour: string;
  public eightyPercentHour: string;
  public twentyTimer: number;
  public eightyTimer: number;
  public errorMessage: string;
  public showTimer: boolean;
  private timer: any;

  constructor(private calculateService: CalculateTimeService) { }

  ngOnInit() {
  }

  public calculateTime(): void {
    if (this.time.hour != null && this.time.minute != null) {
      this.twentyTimer = this.calculateService.calculateTwentyPercent(this.time.hour, this.time.minute);
      this.eightyTimer = this.calculateService.calculateEightyPercent(this.time.hour, this.time.minute);
      this.twentyPercentHour = this.twentyTimer.toString();
      this.eightyPercentHour = this.eightyTimer.toString();

      this.showTimer = true;
    } else {
      this.errorMessage = "Invalid time";
    }
  }

  public timerCount(): void {
    this.timer = setTimeout(() => {
      if (this.twentyTimer > 0) {
        --this.twentyTimer;
        this.timerCount();
      } else {
        let audio = new Audio();
        audio.src = "../../../assets/alarm.mp3";
        audio.load();
        audio.play();
      }
    }, 1000);
  }

  public pauseTimerCount(): void {
    clearTimeout(this.timer);
  }

}
