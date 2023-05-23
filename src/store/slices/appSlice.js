import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const INITIAL_APP_STATE = {
  chats: [],
  chatMap: {},
  isLoading: false,
  activeOrderId: null,
  chatFilterQuery: '',
};

export const fetchChats = createAsyncThunk('appSlice/fetchChats', async () => {
  const response = await fetch(
    'https://my-json-server.typicode.com/codebuds-fk/chat/chats'
  );
  return await response.json();
});

const appSlice = createSlice({
  name: 'appSlice',
  initialState: INITIAL_APP_STATE,
  reducers: {
    setActiveOrderId: (state, action) => {
      state.activeOrderId = action.payload;
    },
    setChatFilterQuery: (state, action) => {
      state.chatFilterQuery = action.payload;
    },
    sendMessage: (state, action) => {
      const { orderId, message } = action.payload;

      state.chatMap[orderId].messageList.push({
        messageId: Date.now(),
        message,
        timestamp: Date.now(),
        sender: 'USER',
        messageType: 'text',
      });
    },
  },
  extraReducers: {
    [fetchChats.fulfilled]: (state, action) => {
      const chats = action.payload;
      state.chats = chats;
      state.chatMap = chats.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.orderId]: curr,
        }),
        {}
      );
    },
    [fetchChats.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setActiveOrderId, setChatFilterQuery, sendMessage } =
  appSlice.actions;
export default appSlice.reducer;
