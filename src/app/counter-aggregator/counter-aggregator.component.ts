import { CounterListComponent } from './../counter-list/counter-list.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Counter } from '../Models/Counter';

@Component({
  selector: 'app-counter-aggregator',
  templateUrl: './counter-aggregator.component.html',
  styleUrls: ['./counter-aggregator.component.scss']
})
export class CounterAggregatorComponent implements OnInit  {

  constructor() { }
  total:number=0;
  @ViewChild(CounterListComponent) childCounterComponent:CounterListComponent =new CounterListComponent();
  
  ngOnInit(): void {
  }

  onAddCounterClicked(isAddCounterClicked:boolean)
  {
    if(isAddCounterClicked)
     this.childCounterComponent.addCounter();
  }
  onIncrementClicked(amount:number) :void
  {
    this.total=this.total + amount;
  }

  onRemoveCounterClicked(counter:Counter) :void
  {
    this.total=this.total-counter.amount;
  }
  

}
