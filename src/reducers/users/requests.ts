import { User } from './types';
import { timeout } from '../helpers';

const getUsersFromStorage = (): User[] | null => JSON.parse(localStorage.getItem('users') || 'null');

const setUsersToStorage = (users: User[]) => localStorage.setItem('users', JSON.stringify(users));

export const getUsers = async (): Promise<User[] | null> => {
  await timeout(1000);
  return getUsersFromStorage();
};

export const postUsers = async (users: User[]) => {
  await timeout(1000);
  const savedUsers = getUsersFromStorage() || [];
  const allUsers = [...users, ...savedUsers];
  setUsersToStorage(allUsers);
  return allUsers;
};

export const authenticate = async (username: string, password: string): Promise<User> => {
  await timeout(1000);
  const savedUsers = getUsersFromStorage() || [];
  const authenticatedUser = savedUsers.find(user => user.username === username && user.password === password);
  if (authenticatedUser) {
    return authenticatedUser;
  }
  throw new Error('Incorrect credentials');
};
