import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, register } from './authOperation';

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLogin: false,
  isLoading: false,
  // status: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
  // toast
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
      .addCase(register.fulfilled)
      .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(register.pending, logIn.pending), handlePending)
      .addMatcher(isAnyOf(register.rejected, logIn.rejected), handleRejected),
});

export const authReduser = authSlice.reducer;
