import { crud } from '../helpers';
import { User } from './types';

const { getItems, createItems } = crud<User>('users');

export const getUsers = getItems;

export const postUsers = createItems;

export const authenticate = async (username: string, password: string): Promise<User> => {
  const savedUsers = await getUsers();
  const authenticatedUser = savedUsers.find(user => user.username === username && user.password === password);
  if (authenticatedUser) {
    return authenticatedUser;
  }
  throw new Error('Incorrect credentials');
};
