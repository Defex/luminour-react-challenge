import { ReducerAction } from '../store';
import { ActionTypes, BooksReducer, Book } from './types';
import { replace } from '../helpers';

const initialState = {
  books: [],
  loading: false,
  hasLoaded: false,
  errorMessage: '',
};

const users = (state = initialState as BooksReducer, { type, payload }: ReducerAction): BooksReducer => {
  switch (type) {
    case ActionTypes.setBooks: {
      return { ...state, books: payload.books };
    }
    case ActionTypes.addBooks: {
      return { ...state, books: [...payload.books, ...state.books] };
    }
    case ActionTypes.updateBooks: {
      return { ...state, books: replace(payload.books, state.books) };
    }
    case ActionTypes.deleteBooks: {
      return {
        ...state,
        books: state.books.filter(({ id }) => !payload.books.find((book: Book) => book.id === id)),
      };
    }
    case ActionTypes.fetchStart:
      return { ...state, loading: true };
    case ActionTypes.fetchEnd:
      return { ...state, loading: false, hasLoaded: true };
    default:
      return state;
  }
};

export default users;
