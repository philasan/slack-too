import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { mockChannels, mockMessages } from './mockData';

export const channels = createSlice({
  name: 'channels',
  initialState: mockChannels,
  reducers: {},
  extraReducers: {},
});

export const messages = createSlice({
  name: 'messages',
  initialState: mockMessages,
  reducers: {},
  extraReducers: {},
});

export default combineReducers({
  channels: channels.reducer,
  messages: messages.reducer,
});
