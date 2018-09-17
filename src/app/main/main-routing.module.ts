import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
      path: '', component: MainComponent,
      children: [
          { path: '', redirectTo: 'timer', pathMatch: 'prefix' },
          { path: 'timer', loadChildren: './timer/timer.module#TimerModule'},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
