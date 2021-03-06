import React, { useState } from 'react';
import ChannelList from './containers/ChannelListContainer';
import Channel from './containers/ChannelContainer';
import SidebarSelf from './components/SidebarSelf';
import './App.css';
import SearchModal from './containers/SearchModalContainer';

function App() {
  const [isSearching, setIsSearching] = useState(false);
  let searchModalEle;

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  if (isSearching) {
    searchModalEle = (<SearchModal toggleSearch={toggleSearch} />);
  }

  return (
    <div className="App">
      <div className="top-search">
        <div className="top-search__search" onClick={toggleSearch}>
          <svg className="top-search__icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          Search
        </div>
      </div>
      <div className="app-container">
        <div className="sidebar">
          <SidebarSelf />
          <div className="sidebar__search" onClick={toggleSearch}>
            <svg className="sidebar__icon sidebar__icon--jumpTo" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84c1.28-1.94 1.07-4.57-.64-6.28C14.55 8.49 13.28 8 12 8c-1.28 0-2.55.49-3.53 1.46-1.95 1.95-1.95 5.11 0 7.05.97.97 2.25 1.46 3.53 1.46.96 0 1.92-.28 2.75-.83L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11z"/></svg>
            Jump to...
          </div>
          <ChannelList />
        </div>
        <Channel toggleSearch={toggleSearch} />
      </div>
      {searchModalEle}
    </div>
  );
}

export default App;
