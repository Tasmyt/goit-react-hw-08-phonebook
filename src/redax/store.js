import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterSlice } from './filterSlice';
import { contactsSlice } from './contactsSlice';
import { authReduser } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const contactsReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    reducer: contactsReducer,
    auth: persistReducer(persistConfig, authReduser),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);