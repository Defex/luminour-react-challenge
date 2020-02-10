export enum ActionTypes {
  setOrders = "orders/setOrders",
  updateOrders = "oders/updateOrds",
  fetchStart = "orders/fetchStart",
  fetchEnd = "orders/fetchEnd"
}

export enum orderStatuses {
  new = "new",
  paid = "paid",
  sent = "sent",
  canceled = "canceled"
}

export interface Order {
  id: string;
  buyer: {
    id: string;
    name: string;
    surname: string;
    username: string;
  };
  status: orderStatuses;
  items: any[];
}

export interface OrdersReducer {
  orders: Order[];
  loading: Boolean;
  hasLoaded: Boolean;
}
