// Libraries.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Dependencies.

import endpoints from '../utilities/endpoints';

// Private.

const initialState = {
  statusFetched: false,
  isAuthorized: false,
  name: null,
  email: null,
  role: null,
  loginAttemptError: false,
};

const status = (state, { payload }) => {
  return {
    ...state,
    ...payload,
    statusFetched: true,
  };
};

// Public.

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    const response = await fetch(endpoints.login, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return response.json();
    }

    return rejectWithValue('Login failed!');
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (userData, { rejectWithValue }) => {
    const response = await fetch(endpoints.logout, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (response.ok) {
      return response.json();
    }

    return rejectWithValue('Logout failed!');
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    status,
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => ({
      ...state,
      loginAttemptError: false,
    }));
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => ({
      ...state,
      isAuthorized: payload.isAuthorized,
    }));
    builder.addCase(loginThunk.rejected, (state) => ({
      ...state,
      loginAttemptError: true,
    }));

    builder.addCase(logoutThunk.fulfilled, (state) => ({
      ...state,
      ...initialState,
      statusFetched: true,
    }));
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
