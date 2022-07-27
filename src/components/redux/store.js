import { configureStore } from '@reduxjs/toolkit';
import casesReducer from './api';
import countryCasesReducer from './fetchCases';

const store = configureStore({
  reducer: {
    result: casesReducer,
    cases: countryCasesReducer,
  },
});

export default store;
