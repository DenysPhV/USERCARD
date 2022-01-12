import { configureStore } from '@reduxjs/toolkit';

import cardReducer from '../redux/userCard/userCard-reducer';

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
  devTools: true,
});

export default store;
