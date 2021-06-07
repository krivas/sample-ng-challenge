import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Counter } from '../Models/Counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
   
  counter:number=0;
  @Output() incrementCounterClicked = new EventEmitter<number>();
  @Output() removeCounterClicked = new EventEmitter<Counter>();
  @Input() index : number=0;
  constructor() { }

  ngOnInit(): void {
  }

  increment()
  {
     this.incrementCounterClicked.emit(1);
     this.counter++;
  }

  remove()
  {
    this.removeCounterClicked.emit({amount:this.counter,index:this.index});
  }

}

