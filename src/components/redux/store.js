import { configureStore } from '@reduxjs/toolkit';
import countryCasesReducer from './fetchCases';
import loadDataReducer from './loadApi';

const store = configureStore({
  reducer: {
    data: loadDataReducer,
    cases: countryCasesReducer,
  },
});

export default store;
