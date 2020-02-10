import { User } from '../users/types';

export enum ActionTypes {
  set = 'me/set',
  clear = 'me/clear',
}

export type Me = User;

export interface MeReducer {
  me: Me | null;
  loading: boolean;
  hasLoaded: boolean;
}
