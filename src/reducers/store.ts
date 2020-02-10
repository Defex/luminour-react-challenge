import { configureStore, getDefaultMiddleware, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { RootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['me'],
};

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export const persistor = persistStore(store);

export type AppThunk = ThunkAction<void, RootReducer, null, Action<string>>;

export type AppDispatch = typeof store.dispatch;

export type ReducerAction = {
  type: string;
  payload: any; // eslint-disable-line
};
