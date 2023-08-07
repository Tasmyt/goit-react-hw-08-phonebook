import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64cb41cf700d50e3c70599e8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/contacts');        
        return data;        
    }
    catch (error) { return thunkAPI.rejectWithValue(error.message); }
  }
);
export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAdd',
  async (contactsData, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', {...contactsData});      
      return data;
    }
    catch (error) { return thunkAPI.rejectWithValue(error.message); }
  }  
);
export const fetchDelContact = createAsyncThunk(
  'contacts/fetchDel',
  async (contactId, thunkAPI) => {
    try {      
      const { data } = await axios.delete(`/contacts/${contactId}`);      
      return data;
    }
    catch (error) { return thunkAPI.rejectWithValue(error.message); }
  }  
);