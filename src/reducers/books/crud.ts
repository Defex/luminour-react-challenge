import { Book } from './types';
import { requiredAdmin, crud } from '../helpers';

const { getItems, createItems, updateItems, deleteItems } = crud<Book>('books');

export { getItems as getBooks };

export const postBooks = createItems;

export const putBooks = requiredAdmin(updateItems);

export const deleteBooks = requiredAdmin(deleteItems);
