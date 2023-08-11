import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { current, logIn, logOut, register } from './authOperation';

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLogin: false,
  isLoading: false,  
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
  alert(`${payload}` === 'Network Error'
      ? `You are registered, check your data and log in to your account`
      : 'Something went wrong. Check your data and try again');
};

const handleFulfilled = (state, {payload}) => {
  state.token = payload.token;
    state.user = payload.user;
    state.isLogin = true;
    state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, () => initialState)
      
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isLoading = false;
      })
      
      .addCase(current.rejected, () => initialState)
      .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled,), handleFulfilled)
      .addMatcher(isAnyOf(register.pending, logIn.pending, logOut.pending, current.pending), handlePending)
      .addMatcher(isAnyOf(register.rejected, logIn.rejected, logOut.rejected), handleRejected)
      
});

export const authReduser = authSlice.reducer;
