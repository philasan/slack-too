import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';

const channelsSliceSelector = (state) => state.channels;

const messagesSliceSelector = (state) => state.messages;

const uiSliceSelector = (state) => state.ui;

export const selectedChannelSelector = createSelector(
  channelsSliceSelector,
  uiSliceSelector,
  (channels, ui) => channels[ui.selectedChannel],
);

export const messagesForSelectedChannelSelector = createSelector(
  selectedChannelSelector,
  messagesSliceSelector,
  (channel, messagesSlice) => messagesSlice[channel.name],
);

export const channelSelector = (state, { channel }) => state.channels[channel];

export const messagesByChannelSelector = (state, { channel }) => state.messages[channel];

export const channelListSelector = createSelector(
  channelsSliceSelector,
  (channels) => _.values(channels),
);
