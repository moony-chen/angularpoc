import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, Observable, merge, interval } from "rxjs";
import { Store, select } from "@ngrx/store";
import { addHour, addSecond } from "./clock.actions";
import { mapTo, map } from "rxjs/operators";

@Component({
  selector: "app-clock",
  template: `
    <input #inputNum type="number" value="0" />
    <button (click)="click$.next(inputNum.value)">Update</button>
    <p>
      {{ clock | async | date: "yyyy/MM/dd hh:mm:ss" }}
    </p>
  `,
  styles: []
})
export class ClockComponent implements OnInit, OnDestroy {
  click$ = new Subject().pipe(
    map((value: string) => ({
      action: addHour,
      payload: { unit: parseInt(value) }
    }))
  );
  seconds$ = interval(1000).pipe(
    mapTo({ action: addSecond, payload: { unit: 1 } })
  );
  clock;
  sub;

  constructor(private store: Store<{ clock: Date }>) {
    this.clock = store.pipe(select("clock"));
    this.sub = merge(this.click$, this.seconds$).subscribe(
      ({ action, payload }) => store.dispatch(action(payload))
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
