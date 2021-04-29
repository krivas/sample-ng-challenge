import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAggregatorComponent } from './counter-aggregator.component';

describe('CounterAggregatorComponent', () => {
  let component: CounterAggregatorComponent;
  let fixture: ComponentFixture<CounterAggregatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAggregatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterAggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
