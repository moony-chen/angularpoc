import { Action, createReducer, on } from "@ngrx/store";
import { addHour, addSecond } from "./clock.actions";

export const clockReducer = createReducer(
  new Date(),
  on(addHour, state => state),
  on(addSecond, state => state)
);
