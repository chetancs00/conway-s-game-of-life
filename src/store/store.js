import { configureStore } from '@reduxjs/toolkit';
import gridsReducer from '../features/grids/gridSlice';

const store = configureStore({
  reducer: {
    grids: gridsReducer,
  },
});

export default store;
