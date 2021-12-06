import { configureStore } from '@reduxjs/toolkit';
import userReduser from './userCard/userCard-reducer';

export const store = configureStore({
  reducer: userReduser,
  devTools: true,
});
