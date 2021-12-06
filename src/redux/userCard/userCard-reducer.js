import { createReducer, combineReducers } from '@reduxjs/toolkit';
import card from '../../card.json';

import { fullyDesc, shortlyDesc } from './userCard-actions';

const desc = createReducer(card, {
  [fullyDesc]: (state, action) => [action.payload, ...state],
  [shortlyDesc]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export default combineReducers({
  desc,
});
