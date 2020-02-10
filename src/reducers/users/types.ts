export enum ActionTypes {
  setUsers = 'users/setUsers',
  updateUsers = 'users/updateUsers',
  removeUsers = 'users/removeUsers',
  addUsers = 'users/addUsers',
  fetchStart = 'users/fetchStart',
  fetchEnd = 'users/fetchEnd',
}

export enum UserRoles {
  admin = 'admin',
  client = 'client',
}

export interface User {
  id: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  role: UserRoles;
}

export interface UsersReducer {
  users: User[];
  loading: boolean;
  hasLoaded: boolean;
  errorMessage: string | '';
}
