import { ReducerAction } from '../store';
import { OrdersReducer, ActionTypes } from './types';
import { replace } from '../helpers';

const initialState = {
  orders: [],
  loading: false,
  hasLoaded: false,
};

const reducer = (state = initialState as OrdersReducer, { type, payload }: ReducerAction): OrdersReducer => {
  switch (type) {
    case ActionTypes.setOrders:
      return { ...state, orders: payload.orders };
    case ActionTypes.updateOrders:
      return { ...state, orders: replace(payload.orders, state.orders) };
    case ActionTypes.fetchStart:
      return { ...state, loading: true };
    case ActionTypes.fetchEnd:
      return { ...state, loading: false, hasLoaded: true };
    default:
      return state;
  }
};

export default reducer;
