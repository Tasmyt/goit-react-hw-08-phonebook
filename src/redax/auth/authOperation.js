import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const setAuth = token => {

// }

export const register = createAsyncThunk(
  'auth/register',
    async (values, { rejectWithValue }) => {
      console.log(values)
    try {
      const response = await axios.post('/users/signup', values);
    //   setAuth(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);