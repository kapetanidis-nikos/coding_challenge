import { configureStore } from '@reduxjs/toolkit';
import repositoryReducer from "./repositorySlice"

const store = configureStore({
  reducer: {
    repository: repositoryReducer,
  },
});

export default store;