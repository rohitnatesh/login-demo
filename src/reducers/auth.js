// Libraries.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Private.

const initialState = {
  isAuthorized: false,
  name: null,
  email: null,
  role: null,
};

// Public.

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    const response = await fetch(
      'https://baconipsum.com/api/?type=meat-and-filler',
      {
        headers: {
          Accept: 'application/json',
        },
        method: 'get',
        mode: 'cors',
      }
    );

    if (response.ok) {
      return response.json();
    }

    return rejectWithValue('Login failed!');
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isAuthorized: true,
      };
    });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
