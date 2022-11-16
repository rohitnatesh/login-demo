// Libraries.

import { createSlice } from '@reduxjs/toolkit';

// Private.

const supportedLanguages = {
  en: 'English',
  es: 'Spanish',
};

const initialState = {
  code: 'en',
  name: 'English',
  supportedLanguages,
};

const update = (state, { payload }) => {
  const code = payload;

  if (!state.supportedLanguages[code]) return state;

  return {
    ...state,
    code,
    name: state.supportedLanguages[code],
  };
};

// Public.

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    update,
  },
});

export const { actions } = languageSlice;
export default languageSlice.reducer;
