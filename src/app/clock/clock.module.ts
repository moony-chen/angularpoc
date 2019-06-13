import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClockRoutingModule } from "./clock-routing.module";
import { ClockComponent } from "./clock/clock.component";
import { StoreModule } from "@ngrx/store";
import * as fromClock from "./clock/clock.reducers";

@NgModule({
  declarations: [ClockComponent],
  imports: [
    CommonModule,
    ClockRoutingModule,
    StoreModule.forFeature("clock", fromClock.reducer)
  ]
})
export class ClockModule {}
