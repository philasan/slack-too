import React from 'react';
import ChannelList from './containers/ChannelListContainer';
import Channel from './containers/ChannelContainer';
import SidebarSelf from './components/SidebarSelf';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="sidebar">
          <SidebarSelf />
          <ChannelList />
        </div>
        <Channel />
      </div>
    </div>
  );
}

export default App;
