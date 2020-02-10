import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../rootReducer";
import { useEffect, useCallback } from "react";
import { apiGetCartItems, apiSetCart } from "./actions";
import { exists, addCartItem, addCartItemCount, removeCartItemCount, removeCartItem } from "../helpers";
import { Item } from "./types";

export const useCartItems = (userId: string) => {
  const dispatch = useDispatch();
  const { items, loading, hasLoaded } = useSelector(
    (state: RootReducer) => state.cartItems
  );

  useEffect(() => {
    if (userId && !hasLoaded && !loading) {
      dispatch(apiGetCartItems(userId));
    }
  }, [userId, hasLoaded, loading, dispatch]);

  return { items, loading, hasLoaded };
};

export const useCartItemsActions = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cartItems);

  const addOrIncreaseItem = useCallback(
    (userId: string, item: Item) => {
      const existingItem: Item = exists(item.id, items);
      if (!existingItem) {
        const _items = addCartItem(item, items);
        return dispatch(apiSetCart(userId, _items));
      }
      const _items = addCartItemCount(item, items);
      return dispatch(apiSetCart(userId, _items));
    },
    [items, dispatch]
  );

  const removeOrDecreaseItem = useCallback(
    (userId: string, item: Item) => {
      const existingItem: Item = exists(item.id, items);
      if (existingItem && existingItem.quantity === 1) {
        const _items = removeCartItem(item, items)
        return dispatch(apiSetCart(userId, _items));
      }
      const _items = removeCartItemCount(item, items)
      return dispatch(apiSetCart(userId, _items));
    },
    [items, dispatch]
  );

  const removeItem = useCallback(
    (userId: string, item: Item) => {
      const _items = items.filter(({ id}) => id!==item.id)
      return dispatch(apiSetCart(userId, _items));
    },
    [items, dispatch]
  );
  

  return {
    addOrIncreaseItem,
    removeOrDecreaseItem,
    removeItem
  };
};
