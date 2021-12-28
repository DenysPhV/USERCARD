import { configureStore } from '@reduxjs/toolkit';

import cardReducer from '../redux/userCard/userCard-reducer';

const store = configureStore({
  reducer: {
    cardReducer,
  },
  devTools: true,
});

export default store;

// 1 получить данные из джейсона
//
