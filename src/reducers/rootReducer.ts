import { combineReducers } from 'redux';
import users from './users/reducer';
import orders from './orders/reducer';
import books from './books/reducer';
import cartItems from './cart/reducer';
import me from './me/reducer';

const rootReducer = combineReducers({
  users,
  orders,
  books,
  cartItems,
  me,
});

export default rootReducer;

export type RootReducer = ReturnType<typeof rootReducer>;
