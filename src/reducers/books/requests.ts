/*eslint-disable */
import { timeout, replace } from '../helpers';
import { Book } from './types';

export const getBooksFromGoogle = async (): Promise<{ items: any[] }> => {
  const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=book`);
  return await result.json();
};

const getBooksFromStorage = (): Book[] | null => JSON.parse(localStorage.getItem('books') || 'null');

const setBooksToLocalStorage = (books: Book[]) => localStorage.setItem('books', JSON.stringify(books));

export const getBooks = async (): Promise<Book[] | null> => {
  await timeout(1000);
  return getBooksFromStorage();
};

export const postBooks = async (books: Book[]) => {
  await timeout(1000);
  const savedBooks = getBooksFromStorage() || [];
  const allBooks = [...books, ...savedBooks];
  setBooksToLocalStorage(allBooks);
  return books;
};

export const putBooks = async (books: Book[]) => {
  await timeout(1000);
  const savedBooks = getBooksFromStorage() || [];
  const updatedBooks = replace(books, savedBooks);
  setBooksToLocalStorage(updatedBooks);
};

export const deleteBooks = async (books: Book[]) => {
  await timeout(1000);
  const savedBooks = getBooksFromStorage() || [];
  const updatedBooks = savedBooks.filter(book => !books.find(({ id }) => id === book.id));
  setBooksToLocalStorage(updatedBooks);
  return books;
};
