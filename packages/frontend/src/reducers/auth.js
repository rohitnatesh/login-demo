// Libraries.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Private.

const initialState = {
  statusFetched: false,
  isAuthorized: false,
  name: null,
  email: null,
  role: null,
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
    const response = await fetch('/api/auth/login', {
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    status,
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isAuthorized: payload.isAuthorized,
      };
    });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
