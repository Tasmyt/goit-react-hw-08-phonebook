// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi } from 'http';
import { publicApi } from 'http';
import { token } from 'http';
import { selectToken } from './authSelectors';

export const register = createAsyncThunk(
  'auth/register',
    async (values, { rejectWithValue }) => {
      
    try {
      const {data} = await publicApi.post('/users/signup', values);      
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
    async (values, { rejectWithValue }) => {
      
    try {
      const {data} = await publicApi.post('/users/login', values);
      token.set(`Bearer ${data.token}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (user, {getState, rejectWithValue }) => {
    try {
      // const stateToken = selectToken(getState());
      // token.set(stateToken);      
      await privateApi.post('/users/logout', user);
      token.remove();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { getState, rejectWithValue }) => {
    
    try {
      const stateToken = selectToken(getState());
      token.set(stateToken);
      const data = await privateApi.get('/users/current');
      
      return data.data;

    } catch (e) {
        return rejectWithValue(e.message);
    }
  }
    )