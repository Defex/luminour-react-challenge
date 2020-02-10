import { Book } from '../books/types';

export enum ActionTypes {
  setItems = 'cart/setCart',
  addItems = 'cart/add',
  removeItems = 'cart/remove',
  updateItems = 'cart/update',
  fetchStart = 'cart/fetchStart',
  fetchEnd = 'cart/fetchEnd',
}

export type Item = Book;

export interface CartItems {
  userId: string;
  items: Item[];
}

export interface CartReducer {
  items: Item[];
  loading: boolean;
  hasLoaded: boolean;
}
