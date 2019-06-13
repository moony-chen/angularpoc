import { createAction, props } from "@ngrx/store";

export const addSecond = createAction(
  "[Clock] second",
  props<{ unit: number }>()
);
export const addHour = createAction("[Clock] hour", props<{ unit: number }>());
