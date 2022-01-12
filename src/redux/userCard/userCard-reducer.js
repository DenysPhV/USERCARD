import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cards from '../../card.json';
import actions from './userCard-actions';

const cardItems = createReducer(cards, {
  // [actions.showElement]: (state, { payload }) => [...state, payload],

  // [actions.showElement]: (state, { payload }) =>
  //   state.map((state) => (state.id === payload ? state.description : state)),
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map((state) =>
      state.id === payload ? { ...state, completed: !state.completed } : state,
    ),
});

export default combineReducers({
  cardItems,
});
