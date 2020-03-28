import faker from 'faker';
import _ from 'lodash';

export const mockChannels = {
  '#general': {
    isPrivate: false,
    name: '#general',
    topic: 'Company-wide announcements and work-based matters',
  },
  '#events': {
    isPrivate: true,
    name: '#events',
    topic: 'Company-wide events chatter',
  },
  '#social': {
    isPrivate: false,
    name: '#social',
    topic: 'socializing hub',
  },
  '#memes': {
    isPrivate: false,
    name: '#memes',
    topic: 'memedump',
  },
  '#tesla-fanclub': {
    isPrivate: true,
    name: '#tesla-fanclub',
    topic: '3 months maybe, 6 months definitely',
  },
};

export const mockMessages = {};

for (const channelName in mockChannels) {
  if (mockChannels.hasOwnProperty(channelName)) {
    const length = faker.random.number({ min: 9, max: 20 });
    const messages = [];

    for (let i = 0; i < length; i++) {
      messages.push({
        user: { username: 'philasan', id: 123 },
        message: faker.lorem.sentence(),
        createdAt: faker.date.recent(3).getTime(),
      });
    }

    mockMessages[channelName] = _.sortBy(messages, (message) => message.createdAt);
  }
}