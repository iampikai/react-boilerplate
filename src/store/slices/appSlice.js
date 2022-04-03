import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_APP_STATE = {
  locale: null,
  theme: null,
  isAuthed: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState: INITIAL_APP_STATE,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale, setTheme } = appSlice.actions;
export default appSlice.reducer;
