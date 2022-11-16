// Libraries.

import { configureStore } from '@reduxjs/toolkit';

// Dependencies.

import reducer from '../reducers';

// Public.

const store = configureStore({
  reducer,
});

export default store;
