import { ActionTypes, Book, BookFormFields } from './types';
import { AppThunk } from '../store';
import { getGoogleBooksToApi } from '../helpers';
import { getBooks, createBook, updateBook, deleteBook } from './crud';
import { Me } from '../me/types';

export const setBooks = (books: Book[]) => ({
  type: ActionTypes.setBooks,
  payload: { books },
});

export const addBooks = (books: Book[]) => ({
  type: ActionTypes.addBooks,
  payload: { books },
});

export const updateBooks = (books: Book[]) => ({
  type: ActionTypes.updateBooks,
  payload: { books },
});

export const removeBooks = (books: Book[]) => ({
  type: ActionTypes.deleteBooks,
  payload: { books },
});

export const booksFetchStart = () => ({
  type: ActionTypes.fetchStart,
});

export const booksFetchEnd = (errorMessage?: string) => ({
  type: ActionTypes.fetchEnd,
  payload: { errorMessage },
});

export const apiBooksGet = (): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    const books = await getBooks();
    if (books.length === 0) {
      const newBooks = await getGoogleBooksToApi();
      const _books = await Promise.all(newBooks.map(async book => await createBook(book)));
      dispatch(setBooks(_books));
      return dispatch(booksFetchEnd());
    }
    if (books.length > 0) {
      dispatch(setBooks(books));
      dispatch(booksFetchEnd());
    }
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};

export const apiBooksPost = (books: BookFormFields[]): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    const _books = await Promise.all(books.map(async book => await createBook(book)));
    dispatch(setBooks(_books));
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};

export const apiBooksPut = (me: Me, books: Book[]): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    const _books = await Promise.all(books.map(async book => await updateBook(me, book)));
    dispatch(updateBooks(_books));
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};

export const apiBooksDelete = (me: Me, books: Book[]): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    const _books = await Promise.all(books.map(async book => await deleteBook(me, book.id)));
    dispatch(removeBooks(_books));
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};
