import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-totals',
  templateUrl: './counter-totals.component.html',
  styleUrls: ['./counter-totals.component.scss']
})
export class CounterTotalsComponent implements OnInit {

  constructor() { }
  @Input() total:number=0;
  @Output() addCounterClicked = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  addCounter()
  {
     this.addCounterClicked.emit(true);
  }

}
