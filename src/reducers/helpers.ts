import { Item } from "./cart/types";
import { Book } from "./books/types";
import { UserRoles } from "./users/types";
import { orderStatuses } from "./orders/types";

export const timeout = (delay: number) =>
  new Promise(resolve => setTimeout(resolve, delay));

export const exists = (id: any, arr: any[]) => arr.find(v => v.id === id);
export const replace = (updated: any[], arr: any[]) =>
  arr.map(v => updated.find(u => v.id === u.id) || v);
export const remove = (remove: any[], arr: any[]) =>
  arr.filter(v => !remove.find(u => v.id === u.id) || v);

// books
export const transformGoogleBookToApi = (book: any): Book => ({
  id: book.id,
  title: book.volumeInfo && book.volumeInfo.title,
  author:
    (book.volumeInfo &&
      book.volumeInfo.authors &&
      book.volumeInfo.authors.join(", ")) ||
    "Unknown Author",
  published_date:
    (book.volumeInfo && book.volumeInfo.publishedDate) ||
    new Date().toISOString().split('T'),
  book_cover:
    (book.volumeInfo &&
      book.volumeInfo.imageLinks &&
      book.volumeInfo.imageLinks.thumbnail) ||
    "https://via.placeholder.com/150x150.png",
  quantity: Math.floor(Math.floor(Math.random() * 100) % 100)
});

// cart items
export const addCartItem = (item: Item, items: Item[]) => [
  { ...item, quantity: 1 },
  ...items
];

export const removeCartItem = (item: Item, items: Item[]) =>
  items.filter(({ id }) => id !== item.id);

export const addCartItemCount = (item: Item, items: Item[]) =>
  items.map(v =>
    v.id === item.id ? { ...item, quantity: v.quantity + 1 } : v
  );

export const removeCartItemCount = (item: Item, items: Item[]) =>
  items.map(v =>
    v.id === item.id ? { ...item, quantity: v.quantity - 1 } : v
  );

// order rights

export const getClientAllowedOrdersStatusChanges = (orderStatus: orderStatuses) => ({
  [orderStatuses.canceled]: orderStatus === orderStatuses.new,
  [orderStatuses.paid]: orderStatus === orderStatuses.new,
})

export const getAdminAllowedOrderStatusChanges = (orderStatus: orderStatuses) => ({
  [orderStatuses.canceled]: [orderStatuses.paid, orderStatuses.paid].includes(orderStatus),
  [orderStatuses.sent]: [orderStatuses.paid, orderStatuses.paid].includes(orderStatus),
})

export const getAllowedOrdersStatusChanges = (
  userRole: UserRoles,
  orderStatus: orderStatuses
) => {
  if(userRole === UserRoles.admin) {
    return getAdminAllowedOrderStatusChanges(orderStatus)
  }
  return getClientAllowedOrdersStatusChanges(orderStatus)
}
