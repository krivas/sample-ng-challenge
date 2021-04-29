import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterAggregatorComponent } from './counter-aggregator/counter-aggregator.component';

const routes: Routes = [
  { path: '', component: CounterAggregatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
