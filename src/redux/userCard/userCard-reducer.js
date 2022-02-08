import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cards from '../../card.json';
import actions from './userCard-actions';

const cardItems = createReducer(cards, {
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map((state) =>
      state.id === payload ? { ...state, completed: !state.completed } : state,
    ),

  [actions.togglePopup]: (state, { payload }) =>
    state.map((state) =>
      state.id === payload ? { ...state, showPopup: !state.showPopup } : state,
    ),
});

export default combineReducers({
  cardItems,
});
