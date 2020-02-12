import { Item } from './cart/types';
import { BookFormFields } from './books/types';
import { UserRoles } from './users/types';
import { orderStatuses } from './orders/types';
import { Me } from './me/types';
import { uuid } from 'uuidv4';

/*eslint-disable */
export const timeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

export const exists = (id: any, arr: any[]) => arr.find(v => v.id === id);
export const replace = (updated: any[], arr: any[]) => arr.map(v => updated.find(u => v.id === u.id) || v);
export const remove = (remove: any[], arr: any[]) => arr.filter(v => !remove.find(u => v.id === u.id) || v);

// books
export const getBooksFromGoogle = async (): Promise<{ items: any[] }> => {
  const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=book`);
  return await result.json();
};

export const transformGoogleBookToApi = (book: any): BookFormFields => ({
  title: book.volumeInfo && book.volumeInfo.title,
  author: (book.volumeInfo && book.volumeInfo.authors && book.volumeInfo.authors.join(', ')) || 'Unknown Author',
  published_date: (book.volumeInfo && book.volumeInfo.publishedDate) || new Date().toISOString().split('T'),
  book_cover:
    (book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) ||
    'https://via.placeholder.com/150x150.png',
  quantity: Math.floor(Math.floor(Math.random() * 100) % 100),
});

export const getGoogleBooksToApi = async (): Promise<BookFormFields[]> => {
  const booksFromGoogle = getBooksFromGoogle();
  const transformedBooks = (await booksFromGoogle).items.map(book => transformGoogleBookToApi(book));
  return transformedBooks;
};

// cart items
export const addCartItem = (item: Item, items: Item[]) => [{ ...item, quantity: 1 }, ...items];

export const removeCartItem = (item: Item, items: Item[]) => items.filter(({ id }) => id !== item.id);

export const addCartItemCount = (item: Item, items: Item[]) =>
  items.map(v => (v.id === item.id ? { ...item, quantity: v.quantity + 1 } : v));

export const removeCartItemCount = (item: Item, items: Item[]) =>
  items.map(v => (v.id === item.id ? { ...item, quantity: v.quantity - 1 } : v));

// order rights

export const getClientAllowedOrdersStatusChanges = (orderStatus: orderStatuses) => ({
  [orderStatuses.canceled]: orderStatus === orderStatuses.new,
  [orderStatuses.paid]: orderStatus === orderStatuses.new,
});

export const getAdminAllowedOrderStatusChanges = (orderStatus: orderStatuses) => ({
  [orderStatuses.canceled]: [orderStatuses.paid, orderStatuses.paid].includes(orderStatus),
  [orderStatuses.sent]: [orderStatuses.paid, orderStatuses.paid].includes(orderStatus),
});

export const getAllowedOrdersStatusChanges = (userRole: UserRoles, orderStatus: orderStatuses) => {
  if (userRole === UserRoles.admin) {
    return getAdminAllowedOrderStatusChanges(orderStatus);
  }
  return getClientAllowedOrdersStatusChanges(orderStatus);
};
/*eslint-enable */

export const getFromStorage = (key: string, defaultValue: any) =>
  JSON.parse(localStorage.getItem(key) || `${defaultValue}`);

export const setToStorage = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));

export const cachedStorage = <S, G>(key: string, defaultValue: string) => {
  let data: any = null;
  const handleSetToStorage = (value: S) => {
    data = value;
    setToStorage(key, value);
  };
  const handleGetFromStorage = (): G => {
    if (data) {
      return data;
    }
    data = getFromStorage(key, defaultValue);
    return data;
  };
  return {
    get: handleGetFromStorage,
    set: handleSetToStorage,
  };
};

export const requiredAdmin = (f: Function) => async (me: Me, ...rest: any) => {
  if (me.role !== UserRoles.admin) {
    throw new Error('You are not allowed to excute this request');
  }
  return f(...rest);
};

interface BaseItem {
  id?: string;
}

export const crud = <ItemType extends BaseItem>(storageKey: string) => {
  interface StorageItems {
    [k: string]: ItemType;
  }
  interface Storage {
    items: StorageItems;
    keys: string[];
  }
  const storage = cachedStorage<Storage, Storage>(
    storageKey,
    JSON.stringify({
      items: {},
      keys: [],
    }),
  );

  const getItems = async (): Promise<ItemType[]> => {
    await timeout(1000);
    const { items, keys } = storage.get();
    return keys.map(k => items[k]);
  };

  const createItem = async (item: ItemType): Promise<ItemType> => {
    await timeout(1000);
    const { keys, items } = storage.get();
    const _item = { ...item, id: uuid() };
    const _itemsStorage = {
      keys: [...keys, _item.id],
      items: { ...items, [_item.id]: _item },
    };
    storage.set(_itemsStorage);
    return _item;
  };

  const createItems = async (newItems: ItemType[]): Promise<ItemType[]> => {
    await timeout(1000);
    const { keys, items } = storage.get();
    const _items = newItems.map(item => ({ ...item, id: uuid() }));
    const _newItems = _items.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
    const _itemsStorage = {
      keys: [...keys, ...Object.keys(_newItems)],
      items: { ...items, ..._newItems },
    };
    storage.set(_itemsStorage);
    return _items;
  };

  const updateItem = async (item: ItemType): Promise<ItemType> => {
    await timeout(1000);
    const { keys, items } = storage.get();
    if (item.id && !!items[item.id]) {
      const _itemsStorage = {
        keys,
        items: { ...items, [item.id]: item },
      };
      storage.set(_itemsStorage);
      return item;
    }
    throw new Error('Item does not exist');
  };

  const updateItems = async (updatedItems: ItemType[]): Promise<ItemType[]> => {
    await timeout(1000);
    const { keys, items } = storage.get();

    const _items = updatedItems.reduce((acc, item) => ({ ...acc, [item.id || '']: item }), {});

    const _itemsStorage = {
      keys,
      items: { ...items, ..._items },
    };

    storage.set(_itemsStorage);

    return updatedItems;
  };

  const deleteItem = async (bookId: string): Promise<ItemType> => {
    await timeout(1000);
    const { keys, items } = storage.get();
    if (!!items[bookId]) {
      const { [bookId]: _book, ..._items } = items;
      const _itemsStorage = {
        keys: keys.filter(k => k !== bookId),
        items: _items,
      };
      storage.set(_itemsStorage);
      return _book;
    }
    throw new Error('Item does not exist');
  };

  const deleteItems = async (ids: string[]): Promise<ItemType[]> => {
    await timeout(1000);
    const { keys, items } = storage.get();

    const deletedItems = ids.map(id => items[id]);
    const _keys = keys.filter(k => !ids.includes(k));
    const _items = _keys.reduce((acc, k) => ({ ...acc, [k]: items[k] }), {});

    const _itemsStorage = {
      keys,
      items: _items,
    };

    storage.set(_itemsStorage);

    return deletedItems;
  };

  return {
    getItems,
    createItem,
    createItems,
    updateItem,
    updateItems,
    deleteItem,
    deleteItems,
  };
};
