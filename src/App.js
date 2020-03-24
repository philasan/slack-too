import React from 'react';

import './App.css';
import ChannelList from './components/ChannelList';

function App() {

  const channels = [
    {'name': 'general'},
    {'name': 'random'},
    {'name': 'website'},
  ];

  return (
    <div className="App">
      <div className="search-bar"></div>
      <div className="app-container">
        <div className="sidebar">
          <ChannelList channels={channels} />
        </div>
        <div className="content-container"></div>
      </div>
    </div>
  );
}

export default App;
