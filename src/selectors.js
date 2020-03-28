import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';

const channelsSliceSelector = (state) => state.channels;

export const channelSelector = (state, { channel }) => state.channels[channel];

export const messagesByChannelSelector = (state, { channel }) => state.messages[channel];

export const channelListSelector = createSelector(
  channelsSliceSelector,
  (channels) => _.values(channels),
);
