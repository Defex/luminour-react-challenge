import { ActionTypes, Book } from './types';
import { getBooks, postBooks, getBooksFromGoogle, putBooks, deleteBooks } from './requests';
import { AppThunk } from '../store';
import { transformGoogleBookToApi } from '../helpers';

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
    if (books === null) {
      const googleBooks = await getBooksFromGoogle();
      const transformedBooks = (googleBooks && googleBooks.items.map(item => transformGoogleBookToApi(item))) || [];
      const createdBooks = await postBooks(transformedBooks);
      dispatch(setBooks(createdBooks));
    }
    if (!!books) {
      dispatch(setBooks(books));
    }
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};

export const apiBooksPost = (books: Book[]): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    const createdBooks = await postBooks(books);
    dispatch(addBooks(createdBooks));
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};

export const apiBooksPut = (books: Book[]): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    await putBooks(books);
    dispatch(updateBooks(books));
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};

export const apiBooksDelete = (books: Book[]): AppThunk => async dispatch => {
  dispatch(booksFetchStart());
  try {
    await deleteBooks(books);
    dispatch(removeBooks(books));
    dispatch(booksFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(booksFetchEnd(e.message));
  }
};
