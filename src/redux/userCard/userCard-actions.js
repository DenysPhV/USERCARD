import { createAction } from '@reduxjs/toolkit';

const showElement = createAction('cards/element');
const togglePopup = createAction('cards/popup');
const toggleCompleted = createAction('cards/toggleCompleted');

const cardActions = { showElement, togglePopup, toggleCompleted };
export default cardActions;
