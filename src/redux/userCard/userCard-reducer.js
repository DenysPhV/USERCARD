import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

import cardData from '../../card.json';

import { userCardData } from './userCard-actions';

const cardUserItems = createReducer(cardData, {
  [userCardData]: (state, action) => [action.payload, ...state],
});

export default cardUserItems;
