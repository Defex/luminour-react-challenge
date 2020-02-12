import { ActionTypes, Book } from './types';
import { AppThunk } from '../store';
import { getGoogleBooksToApi } from '../helpers';
import { getBooks, putBooks, deleteBooks, postBooks } from './crud';
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
      const _books = await postBooks(newBooks);
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

export const apiBooksPost = (books: Book[]): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    const _books = await postBooks(books);
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
    const _books = await putBooks(me, books);
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
    const _books = await deleteBooks(
      me,
      books.map(({ id }) => id),
    );
    dispatch(removeBooks(_books));
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};
