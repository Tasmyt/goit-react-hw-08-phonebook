import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, fetchAddContact, fetchDelContact } from './operations';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
    status: 'pending',
  };
};

const handleRejected = (state, { payload }) => {
  return {
    ...state,
    isLoading: false,
    error: payload,
    status: 'rejected',
  };
};

const handleFulfilled = (state, { payload }) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    contacts: payload,
    status: 'fulfilled',
  };
};

const handleFulfilledAdd = (state, { payload }) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    status: 'fulfilled',
    contacts: [payload, ...state.contacts],
  };
};

const handleFulfilledDel = (state, { payload }) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    status: 'fulfilled',
    contacts: state.contacts.filter(item => item.id !== payload.id),
  };
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  status: 'idle',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder      
      .addCase(fetchContacts.fulfilled, handleFulfilled)      
      .addCase(fetchAddContact.fulfilled, handleFulfilledAdd)      
      .addCase(fetchDelContact.fulfilled, handleFulfilledDel)     
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          fetchAddContact.pending,
          fetchDelContact.pending,
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          fetchAddContact.rejected,
          fetchDelContact.rejected,
        ),
        handleRejected
      ),
});
