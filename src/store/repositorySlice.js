import { createSlice } from '@reduxjs/toolkit';

const repositorySlice = createSlice({
  name: 'repository',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setState(state, action) {
      const { key, data } = action.payload;

      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = data;
      } else {
        console.log(`Key "${key}" does not exist in state. Creating it now.`);
      }
    },
  },
});

export const repositoryActions = repositorySlice.actions;
export default repositorySlice.reducer;
