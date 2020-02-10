import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../rootReducer';
import { apiAuthenticate, apiGetUsers } from './actions';
import { useHistory } from 'react-router';
import { useMe } from '../me/hooks';
import { UserRoles } from './types';

export const useGetUsers = (forceFetch?: boolean) => {
  const dispatch = useDispatch();
  const { users, loading, hasLoaded, errorMessage } = useSelector((state: RootReducer) => state.users);

  useEffect(() => {
    if ((!hasLoaded || forceFetch) && !loading) {
      dispatch(apiGetUsers());
    }
  }, [hasLoaded, loading, forceFetch, dispatch]);

  return {
    users,
    loading,
    hasLoaded,
    errorMessage,
  };
};

export const useAuthenticate = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootReducer) => state.me);
  const { errorMessage, loading } = useSelector((state: RootReducer) => state.users);

  const authenticated = useMemo(() => !!me, [me]);

  const authenticate = useCallback(
    (username: string, password: string) => {
      dispatch(apiAuthenticate(username, password));
    },
    [dispatch],
  );

  return {
    authenticated,
    authenticate,
    errorMessage,
    loading,
  };
};

export const useAllowAdmin = () => {
  const { me } = useMe();
  const { push } = useHistory();

  useEffect(() => {
    if (me && me.role !== UserRoles.admin) {
      push('/');
    }
  }, [me, push]);
};
