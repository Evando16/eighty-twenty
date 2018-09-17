import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule,
    TimerRoutingModule
  ],
  declarations: [ClockComponent]
})
export class TimerModule { }
