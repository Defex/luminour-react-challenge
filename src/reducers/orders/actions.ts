import { Order, ActionTypes } from "./types";
import { AppThunk } from "../store";
import { getOrders, postOrders, getOrdersByUser, putOrders } from "./requests";
import { apiSetCart } from "../cart/actions";

export const setOrders = (orders: Order[]) => ({
  type: ActionTypes.setOrders,
  payload: { orders }
})

export const updateOrders = (orders: Order[]) => ({
  type: ActionTypes.updateOrders,
  payload: { orders }
})

export const ordersFetchStart = () => ({
  type: ActionTypes.fetchStart
})

export const ordersFetchEnd = () => ({
  type: ActionTypes.fetchEnd
})

export const apiOrdersGet = ():AppThunk => async dispatch => {
  dispatch(ordersFetchStart())
  try {
    const orders = await getOrders();
    dispatch(setOrders(orders))
    dispatch(ordersFetchEnd())
  } catch(e) {
    console.log(e)
    dispatch(ordersFetchEnd())
  }
}

export const apiGetOrdersByUser = (userId: string):AppThunk => async dispatch => {
  dispatch(ordersFetchStart())
  try {
    const orders = await getOrdersByUser(userId);
    dispatch(setOrders(orders))
    dispatch(ordersFetchEnd())
  } catch(e) {
    console.log(e)
    dispatch(ordersFetchEnd())
  }
}

export const apiOrderPost = (order: Order):AppThunk => async dispatch => {
  dispatch(ordersFetchStart())
  try {
    const orders = await postOrders([order]);
    dispatch(setOrders(orders))
    dispatch(apiSetCart(order.buyer.id, []))
    dispatch(ordersFetchEnd())
  } catch(e) {
    console.log(e)
    dispatch(ordersFetchEnd())
  }
}

export const apiPutOrders = (orders: Order[]):AppThunk => async dispatch => {
  dispatch(ordersFetchStart())
  try {
    await putOrders(orders)
    dispatch(updateOrders(orders))
    dispatch(ordersFetchEnd())
  } catch(e) {
    console.log(e)
    dispatch(ordersFetchEnd())
  }
}
