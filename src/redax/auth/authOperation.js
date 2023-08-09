// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi } from 'http';
import { token } from 'http';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const setAuth = token => {  
//     (publicApi.defaults.headers.common.Authorization = `Bearer ${token}`);
//  }

export const register = createAsyncThunk(
  'auth/register',
    async (values, { rejectWithValue }) => {
      
    try {
      const {data} = await publicApi.post('/users/signup', values);
      // setAuth(data.token);
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