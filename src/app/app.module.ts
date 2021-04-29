import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterAggregatorComponent } from './counter-aggregator/counter-aggregator.component';
import { CounterTotalsComponent } from './counter-totals/counter-totals.component';
import { CounterListComponent } from './counter-list/counter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterAggregatorComponent,
    CounterTotalsComponent,
    CounterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
