// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi } from 'http';
import { token } from 'http';
import { selectToken } from './auth/authSelectors';

// axios.defaults.baseURL = 'https://64cb41cf700d50e3c70599e8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {getState, rejectWithValue }) => {
    
    try {
      const stateToken = selectToken(getState());      
      token.set(stateToken);
        const {data} = await privateApi.get('/contacts');        
        return data;        
    }
    catch (error) { return rejectWithValue(error.message); }
  }
);
export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAdd',
  async (contactsData, thunkAPI) => {
    try {
      const { data } = await privateApi.post('/contacts', {...contactsData});      
      return data;
    }
    catch (error) { return thunkAPI.rejectWithValue(error.message); }
  }  
);

export const fetchDelContact = createAsyncThunk(
  'contacts/fetchDel',
  async (contactId, thunkAPI) => {
    try {      
      const { data } = await privateApi.delete(`/contacts/${contactId}`);      
      return data;
    }
    catch (error) { return thunkAPI.rejectWithValue(error.message); }
  }  
);