import React from 'react';

import './App.css';
import ChannelList from './containers/ChannelListContainer';
// import Channel from './components/Channel';
import Channel from './containers/ChannelContainer';

function App() {

  const messages = [
    {
      user: { username: 'philasan', id: 123 },
      message: 'Is anyone there?',
      createdAt: Date.parse('25 Mar 2020 08:00:00 PDT'),
    },
    {
      user: { username: 'philasan', id: 123 },
      message: 'Who survived?',
      createdAt: Date.parse('25 Mar 2020 10:00:00 PDT'),
    },
    {
      user: { username: 'philasan', id: 123 },
      message: 'Somebody new?',
      createdAt: Date.parse('25 Mar 2020 10:01:00 PDT'),
    }
    ,
    {
      user: { username: 'philasan', id: 123 },
      message: 'Anyone else but you',
      createdAt: Date.parse('25 Mar 2020 10:02:00 PDT'),
    }
    ,
    {
      user: { username: 'philasan', id: 123 },
      message: 'On a lonely night',
      createdAt: Date.parse('25 Mar 2020 10:03:00 PDT'),
    },
    {
      user: { username: 'philasan', id: 123 },
      message: 'Was a blinding light',
      createdAt: Date.parse('25 Mar 2020 12:00:00 PDT'),
    },
    {
      user: { username: 'philasan', id: 123 },
      message: `A hundred leaders, would be borne of you
      And though I know, since you've awakened her again
She depends on you, she depends on you
She'll go alone and never speak of this again
We depend on you, we depend on you
And though I know, since you've awakened her again
She depends on you, she depends on you`,
      createdAt: Date.parse('25 Mar 2020 12:01:00 PDT'),
    },
    {
      user: { username: 'philasan', id: 123 },
      message: `She'll go on, and never speak of this again`,
      createdAt: Date.parse('26 Mar 2020 14:02:00 PDT'),
    },
    {
      user: { username: 'philasan', id: 123 },
      message: `We depend on you, we depend (I'll depend) on you`,
      createdAt: Date.parse('26 Mar 2020 14:03:00 PDT'),
    },
  ];

  const channels = [
    {
      name: '#general',
      topic: 'Company-wide announcements and work-based matters',
      messages: messages,
    },
    {'name': '#random'},
    {'name': '#website'},
  ];

  return (
    <div className="App">
      <div className="search-bar"></div>
      <div className="app-container">
        <div className="sidebar">
          <ChannelList />
        </div>
        <Channel />
      </div>
    </div>
  );
}

export default App;
