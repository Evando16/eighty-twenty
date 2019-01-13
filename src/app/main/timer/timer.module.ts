import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { ClockComponent } from './clock/clock.component';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeSecondsFormatPipe } from '../../shared/pipes/time-seconds-format/time-seconds-format.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TimerRoutingModule,
    NgbTimepickerModule,
    FormsModule
  ],
  declarations: [ClockComponent, TimeSecondsFormatPipe]
})
export class TimerModule { }
