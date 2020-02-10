import { ReducerAction } from "../store";
import { ActionTypes, UsersReducer } from "./types";

const initialState = {
  users: [],
  loading: false,
  hasLoaded: false,
  errorMessage: ""
};

const users = (
  state = initialState as UsersReducer,
  { type, payload }: ReducerAction
): UsersReducer => {
  switch (type) {
    case ActionTypes.setUsers: {
      return { ...state, users: payload.users };
    }
    case ActionTypes.addUsers: {
      return { ...state, users: [...payload.users, ...state.users] };
    }
    case ActionTypes.fetchStart:
      return { ...state, loading: true };
    case ActionTypes.fetchEnd:
      return {
        ...state,
        errorMessage: (payload && payload.errorMessage) || "",
        loading: false,
        hasLoaded: true
      };
    default:
      return state;
  }
};

export default users;
