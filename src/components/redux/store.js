import { configureStore } from '@reduxjs/toolkit';
import casesReducer from './api';

const store = configureStore({
  reducer: {
    result: casesReducer,
  },
});

export default store;
