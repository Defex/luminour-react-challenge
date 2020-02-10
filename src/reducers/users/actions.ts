import { User, ActionTypes, UserRoles } from './types';
import { AppThunk } from '../store';
import { getUsers, postUsers, authenticate } from './requests';
import { setMe } from '../me/actions';

const initialUsers = [
  {
    id: '1',
    name: 'Yagami',
    surname: 'Light',
    username: 'Kira',
    password: 'DeathNode',
    role: UserRoles.admin,
  },
  {
    id: '2',
    name: 'User',
    surname: 'Some',
    username: 'simple',
    password: '123',
    role: UserRoles.client,
  },
];

export const setUsers = (users: User[]) => ({
  type: ActionTypes.setUsers,
  payload: { users },
});

export const updateUsers = (users: User[]) => ({
  type: ActionTypes.updateUsers,
  payload: { users },
});

export const removeUsers = (ids: [string]) => ({
  type: ActionTypes.removeUsers,
  payload: { ids },
});

export const addUsers = (users: User[]) => ({
  type: ActionTypes.addUsers,
  payload: { users },
});

export const fetchStart = () => ({
  type: ActionTypes.fetchStart,
});

export const fetchEnd = (errorMessage?: string) => ({
  type: ActionTypes.fetchEnd,
  payload: { errorMessage },
});

export const apiGetUsers = (): AppThunk => async dispatch => {
  dispatch(fetchStart());
  try {
    const users = await getUsers();
    if (users === null) {
      const createdUsers = await postUsers(initialUsers);
      dispatch(setUsers(createdUsers));
    }
    if (!!users) {
      dispatch(setUsers(users));
    }
    dispatch(fetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(fetchEnd());
  }
};

export const apiCreateUsers = (users: User[]): AppThunk => async dispatch => {
  dispatch(fetchStart);
  try {
    const createdUsers = await postUsers(users);
    dispatch(addUsers(createdUsers));
    dispatch(fetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(fetchEnd());
  }
};

export const apiAuthenticate = (username: string, password: string): AppThunk => async dispatch => {
  dispatch(fetchStart());
  try {
    const authenticatedUser = await authenticate(username, password);
    dispatch(setMe(authenticatedUser));
    dispatch(fetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(fetchEnd(e.message));
  }
};
