import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSecondsFormat'
})
export class TimeSecondsFormatPipe implements PipeTransform {

  transform(timeSeconds: number, args?: any): string {
    let timeInHourDecimal: number = timeSeconds / 60 / 60;
    let hour: number = Math.floor(timeInHourDecimal);
    let minutesDecimal: number = (timeInHourDecimal - Math.floor(timeInHourDecimal)) * 60;
    let minutes: number = Math.floor(minutesDecimal);
    let seconds: number = Math.floor((minutesDecimal - minutes) * 60);

    return `${hour}HH: ${minutes}MM: ${seconds}ss`;
  }

}
