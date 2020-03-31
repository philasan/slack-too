import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';

const channelsSliceSelector = (state) => state.channels;

const messagesSliceSelector = (state) => state.messages;

const uiSliceSelector = (state) => state.ui;

const userSliceSelector = (state) => state.users;

export const currentUserSelector = createSelector(
  userSliceSelector,
  (users) => users.self,
);

export const selectedChannelNameSelector = createSelector(
  uiSliceSelector,
  (ui) => ui.selectedChannelName,
);

export const selectedChannelSelector = createSelector(
  channelsSliceSelector,
  selectedChannelNameSelector,
  (channels, selectedChannelName) => channels[selectedChannelName],
);

export const messagesForSelectedChannelSelector = createSelector(
  messagesSliceSelector,
  selectedChannelNameSelector,
  userSliceSelector,
  (messages, selectedChannelName, users) => messages[selectedChannelName].map((message) => ({
    ...message,
    user: users[message.userId],
  })),
);

export const channelSelector = (state, { channel }) => state.channels[channel];

export const messagesByChannelSelector = (state, { channel }) => state.messages[channel];

export const channelListSelector = createSelector(
  channelsSliceSelector,
  (channels) => _.values(channels),
);
