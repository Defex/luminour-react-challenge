import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../rootReducer';
import { apiBooksGet, apiBooksDelete, apiBooksPost, apiBooksPut } from './actions';
import { Book } from './types';

export const useGetBooks = (forceFetch?: boolean) => {
  const [fetched, setFetched] = useState(!forceFetch);
  const dispatch = useDispatch();
  const { books, loading, hasLoaded, errorMessage } = useSelector((state: RootReducer) => state.books);

  useEffect(() => {
    if ((!hasLoaded || !fetched) && !loading) {
      setFetched(true);
      dispatch(apiBooksGet());
    }
  }, [hasLoaded, loading, forceFetch, dispatch, fetched]);

  return {
    books,
    loading,
    hasLoaded,
    errorMessage,
  };
};

export const useBookActions = () => {
  const dispatch = useDispatch();
  return {
    deleteBooks: (books: Book[]) => dispatch(apiBooksDelete(books)),
    addBooks: (books: Book[]) => dispatch(apiBooksPost(books)),
    updateBooks: (books: Book[]) => dispatch(apiBooksPut(books)),
  };
};
