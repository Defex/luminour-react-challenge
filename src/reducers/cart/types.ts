import { Book } from "../books/types";

export enum ActionTypes {
  setItems = 'cart/setCart',
  addItems = 'cart/add',
  removeItems = 'cart/remove',
  updateItems = 'cart/update',
  fetchStart = "cart/fetchStart",
  fetchEnd = "cart/fetchEnd"
}

export interface Item extends Book {}

export interface CartItems {
  userId: String,
  items: Item[],
}

export interface CartReducer {
  items: Item[];
  loading: Boolean;
  hasLoaded: Boolean;
}
