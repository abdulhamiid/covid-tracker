import { configureStore } from '@reduxjs/toolkit';
import loadDataReducer from './loadApi';

const store = configureStore({
  reducer: {
    data: loadDataReducer,
  },
});

export default store;
