import { Order } from './types';
import { crud } from '../helpers';

const { getItems, createItem, updateItem, deleteItem } = crud<Order>('orders');

export { getItems as getOrders };

export const createOrder = createItem;

export const updateOrder = updateItem;

export const deleteOrder = deleteItem;
