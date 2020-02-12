import { Order } from './types';
import { crud } from '../helpers';

const { getItems, createItems, updateItems } = crud<Order>('orders');

export const getOrders = getItems;

export const postOrders = createItems;

export const putOrders = updateItems;

export const getOrdersByUser = async (userId: string): Promise<Order[]> => {
  const allOrders = await getOrders();
  return allOrders.filter(o => o.buyer.id === userId);
};
