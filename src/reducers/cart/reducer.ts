import { ReducerAction } from '../store';
import { ActionTypes, CartReducer } from './types';
import { replace, remove } from '../helpers';

const initialState = {
  items: [],
  loading: false,
  hasLoaded: false,
};

const reducer = (state = initialState as CartReducer, { type, payload }: ReducerAction): CartReducer => {
  switch (type) {
    case ActionTypes.setItems: {
      return { ...state, items: payload.items };
    }
    case ActionTypes.addItems: {
      return { ...state, items: [...payload.items, ...state.items] };
    }
    case ActionTypes.updateItems: {
      return { ...state, items: replace(payload.items, state.items) };
    }
    case ActionTypes.removeItems: {
      return { ...state, items: remove(payload.items, state.items) };
    }
    case ActionTypes.fetchStart:
      return { ...state, loading: true };
    case ActionTypes.fetchEnd:
      return { ...state, loading: false, hasLoaded: true };
    default:
      return state;
  }
};

export default reducer;
