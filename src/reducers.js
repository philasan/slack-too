import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { mockChannels, mockMessages, mockUsers } from './mockData';

export const channels = createSlice({
  name: 'channels',
  initialState: mockChannels,
  reducers: {},
  extraReducers: {},
});

export const messages = createSlice({
  name: 'messages',
  initialState: mockMessages,
  reducers: {
    createMessage: (state, { payload }) => {
      const { channelName, message } = payload;
      state[channelName].push(message);
    },
  },
  extraReducers: {},
});

export const ui = createSlice({
  name: 'ui',
  initialState: {
    selectedChannelName: '#general',
  },
  reducers: {
    selectChannel: (state, { payload }) => {
      state.selectedChannelName = payload;
    },
  },
  extraReducers:{},
});

export const users = createSlice({
  name: 'users',
  initialState: mockUsers,
  reducers: {},
  extraReducers: {},
});

export default combineReducers({
  channels: channels.reducer,
  messages: messages.reducer,
  ui: ui.reducer,
  users: users.reducer,
});
