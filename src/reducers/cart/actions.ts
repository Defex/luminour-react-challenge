import { ActionTypes, Item } from './types';
import { AppThunk } from '../store';
import { getCartItems, putCartItems } from './requests';

export const cartSetItems = (items: Item[]) => ({
  type: ActionTypes.setItems,
  payload: { items },
});

export const cartFetchStart = () => ({
  type: ActionTypes.fetchStart,
});

export const cartFetchEnd = (errorMessage?: string) => ({
  type: ActionTypes.fetchEnd,
  payload: { errorMessage },
});

export const apiGetCartItems = (userId: string): AppThunk => async dispatch => {
  dispatch(cartFetchStart());
  try {
    const userCartItems = await getCartItems(userId);
    dispatch(cartSetItems(userCartItems));
    dispatch(cartFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(cartFetchEnd());
  }
};

export const apiSetCart = (userId: string, items: Item[]): AppThunk => async dispatch => {
  dispatch(cartFetchStart());
  try {
    await putCartItems(userId, items);
    dispatch(cartSetItems(items));
    dispatch(cartFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(cartFetchEnd(e.message));
  }
};
