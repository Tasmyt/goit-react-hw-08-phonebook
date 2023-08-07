import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';

const contactsReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: contactsReducer,
});

