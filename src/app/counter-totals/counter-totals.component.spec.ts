import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTotalsComponent } from './counter-totals.component';

describe('CounterTotalsComponent', () => {
  let component: CounterTotalsComponent;
  let fixture: ComponentFixture<CounterTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTotalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
