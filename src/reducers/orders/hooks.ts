import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { User } from '../users/types';
import { Item } from '../cart/types';
import { apiOrderPost, apiGetOrdersByUser, apiPutOrders } from './actions';
import { orderStatuses, Order } from './types';
import { useMe } from '../me/hooks';
import { RootReducer } from '../rootReducer';
import { useEffect, useState } from 'react';

export const useOrders = () => {
  return useSelector((state: RootReducer) => state.orders);
};

export const useOrderActions = () => {
  const dispatch = useDispatch();

  return {
    createOrder: (user: User, cartItems: Item[]) =>
      dispatch(
        apiOrderPost({
          id: uuid(),
          buyer: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            username: user.username,
          },
          status: orderStatuses.new,
          items: cartItems,
        }),
      ),
    confirmOrder: (order: Order) => dispatch(apiPutOrders([{ ...order, status: orderStatuses.paid }])),
    cancelOrder: (order: Order) => dispatch(apiPutOrders([{ ...order, status: orderStatuses.canceled }])),
    updateOrder: (order: Order) => dispatch(apiPutOrders([order])),
  };
};

export const useGetMyOrders = () => {
  const dispatch = useDispatch();
  const me = useMe();
  const orders = useSelector((state: RootReducer) => state.orders);

  useEffect(() => {
    if (!orders.hasLoaded && !orders.loading && me.me && me.me.id) {
      dispatch(apiGetOrdersByUser(me.me.id));
    }
  });

  return {
    ...orders,
    loading: me.loading || orders.loading,
  };
};

export const useGetOrdersByUserId = (userId: string) => {
  const [fetched, setFecthed] = useState(false);
  const dispatch = useDispatch();
  const { orders, loading, hasLoaded } = useSelector((state: RootReducer) => state.orders);

  useEffect(() => {
    if (userId && !fetched && !loading) {
      setFecthed(true);
      dispatch(apiGetOrdersByUser(userId));
    }
  }, [userId, loading, dispatch, fetched]);

  return {
    orders,
    loading,
    hasLoaded,
  };
};
