import { Book } from "../books/types";
import { timeout } from "../helpers";
import { CartItems } from "./types";

const getCartItemsFromStorage = (): CartItems[] =>
  JSON.parse(localStorage.getItem("carts") || "[]");

const setCartItemsToStorage = (books: CartItems[]) =>
  localStorage.setItem("carts", JSON.stringify(books));

export const getCartItems = async (userId: String): Promise<Book[]> => {
  await timeout(100);
  const userCartItems = getCartItemsFromStorage().find(
    item => item.userId === userId
  ) || { items: [] };
  return userCartItems.items;
};

export const putCartItems = async (
  userId: String,
  items: Book[]
): Promise<CartItems> => {
  // await timeout(100);
  const cartItems = getCartItemsFromStorage();
  const userCart = {
    userId,
    items
  };
  let updated: CartItems[] = []
  const exists = cartItems.find(i => i.userId === userId)
  if(!exists) {
    updated = [...cartItems, userCart]
  }
  if(!!exists) {
    updated = cartItems.map(v =>
      v.userId === userId ? userCart : v
    )
  }
  setCartItemsToStorage(updated);
  return userCart;
};
