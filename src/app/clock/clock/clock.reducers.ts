import { Action, createReducer, on, State } from "@ngrx/store";
import { addHour, addSecond } from "./clock.actions";

const clockReducer = createReducer(
  new Date(),
  on(
    addHour,
    (state, { unit }) => new Date(state.getTime() + unit * 1000 * 3600)
  ),
  on(addSecond, (state, { unit }) => new Date(state.getTime() + unit * 1000))
);

export function reducer(state: Date | undefined, action: Action) {
  return clockReducer(state, action);
}
