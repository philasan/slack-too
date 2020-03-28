import React from 'react';
import ChannelList from './containers/ChannelListContainer';
import Channel from './containers/ChannelContainer';
import './App.css';

function App() {
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
