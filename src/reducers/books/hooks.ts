import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../rootReducer';
import { apiBooksGet, apiBooksDelete, apiBooksPost, apiBooksPut } from './actions';
import { Book } from './types';
import { useMe } from '../me/hooks';

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
  const { me } = useMe();
  return {
    addBooks: (books: Book[]) => dispatch(apiBooksPost(books)),
    deleteBooks: (books: Book[]) => me && dispatch(apiBooksDelete(me, books)),
    updateBooks: (books: Book[]) => me && dispatch(apiBooksPut(me, books)),
  };
};
