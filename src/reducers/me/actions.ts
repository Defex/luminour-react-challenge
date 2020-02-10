import { Me, ActionTypes } from "./types";

export const setMe = (me: Me) => ({
  type: ActionTypes.set,
  payload: { me }
});

export const clearMe = () => ({
  type: ActionTypes.clear
});
