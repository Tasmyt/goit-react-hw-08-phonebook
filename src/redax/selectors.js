import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.reducer.contacts.contacts;
export const getIsLoading = state => state.reducer.contacts.isLoading;
export const getError = state => state.reducer.contacts.error;
export const getStatus = state => state.reducer.contacts.status;
export const getFilter = state => state.reducer.filter;


export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
