import { Order } from './types';
import { timeout, replace } from '../helpers';

const getOrdersFromStorage = (): Order[] => JSON.parse(localStorage.getItem('orders') || '[]');

const setOrdersToLocalStorage = (orders: Order[]) => localStorage.setItem('orders', JSON.stringify(orders));

export const getOrders = async (): Promise<Order[]> => {
  await timeout(1000);
  return getOrdersFromStorage();
};

export const getOrdersByUser = async (userId: string): Promise<Order[]> => {
  await timeout(1000);
  const allOrders = getOrdersFromStorage();
  return allOrders.filter(o => o.buyer.id === userId);
};

export const postOrders = async (orders: Order[]) => {
  await timeout(1000);
  const savedOrders = getOrdersFromStorage();
  const allOrders = [...orders, ...savedOrders];
  setOrdersToLocalStorage(allOrders);
  return allOrders;
};

export const putOrders = async (orders: Order[]) => {
  await timeout(1000);
  const savedOrders = getOrdersFromStorage();
  const updatedOrders = replace(orders, savedOrders);
  setOrdersToLocalStorage(updatedOrders);
};
