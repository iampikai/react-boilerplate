import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_APP_STATE = {
  isAuthed: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState: INITIAL_APP_STATE,
  reducers: {
    setAuthed: (state, action) => {
      state.isAuthed = action.payload;
    },
  },
});

export const { setAuthed } = appSlice.actions;
export default appSlice.reducer;
