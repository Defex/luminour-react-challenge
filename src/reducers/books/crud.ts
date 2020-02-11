import { Book } from './types';
import { requiredAdmin, crud } from '../helpers';

const { getItems, createItem, updateItem, deleteItem } = crud<Book>('books');

export { getItems as getBooks };

export const createBook = createItem;

export const updateBook = requiredAdmin(updateItem);

export const deleteBook = requiredAdmin(deleteItem);
