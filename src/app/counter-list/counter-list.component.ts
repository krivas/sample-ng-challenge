import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Counter } from '../Models/Counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.scss']
})
export class CounterListComponent implements OnInit {

  constructor() { }
  counters=new Array<number>();
  counter:number=0;
  @Output() incrementCounterClicked = new EventEmitter<number>();
  @Output() removeCounterClicked = new EventEmitter<Counter>();

  ngOnInit(): void {
    
    this.addCounter();
  }
   
  addCounter() :void
  {
    this.counters.push(this.counter++);
  }
  onIncrementClicked(amount:number)
  {
    this.incrementCounterClicked.emit(amount);
  }
  onRemoveCounterClicked(counter:Counter)
  {
    this.counters.splice(counter.index,1);
    this.removeCounterClicked.emit(counter);
  }
   
  
}
