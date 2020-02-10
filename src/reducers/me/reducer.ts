import { ReducerAction } from "../store";
import { MeReducer, ActionTypes } from "./types";

const initialState = {
  me: null,
  loading: false,
  hasLoaded: false
};

const reducer = (
  state = initialState as MeReducer,
  { type, payload }: ReducerAction
): MeReducer => {
  switch (type) {
    case ActionTypes.set: {
      return { ...state, me: payload.me };
    }
    case ActionTypes.clear: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
