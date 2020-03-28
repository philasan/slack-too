import React, { useState } from 'react';
import classNames from 'classnames';

import './ChannelList.css';

function ChannelList({ channels, selectChannel, selectedChannelName }) {

  const [collapse, setCollapse] = useState(false);
  // const [selectedChannelIndex, setSelectedChannelIndex] = useState(null);

  const toggleSelectedChannelName = (name) => {
    if (selectedChannelName === name) {

    } else {

      selectChannel(name);
    }
  };

  let channelsElements = channels.map((channel, index) => {
    let channelName = channel.name;
    let style = classNames(
      'sidebar-channel',
      { 'sidebar-channel--selected': selectedChannelName === channelName },
    );

    let channelIcon;
    if (channel.isPrivate) {
      channelIcon = (
        <span className="sidebar-channel__icon">
          <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
        </span>
      );
    } else {
      channelIcon = (
        <span className="sidebar-channel__icon">#</span>
      );
    }

    return (
      <li
        key={index}
        className={style}
        onClick={() => toggleSelectedChannelName(channelName)}
      >
        {channelIcon}
        <span className="sidebar-channel-name">{channelName.replace('#', '')}</span>
      </li>
    );
  });

  let collapseButtonStyle = classNames(
    'sidebar-control-icon',
    'sidebar-control-icon--collapse',
    { 'sidebar-control-icon--rotate270': collapse }
  );

  let channelsListStyle = classNames(
    "sidebar-channels-list",
    { "sidebar-channels-list--collapsed": collapse },
  );

  return (
    <div className="sidebar-category sidebar-category--channels">
      <div className="sidebar-controls">
        <button
          className={collapseButtonStyle}
          onClick={() => setCollapse(!collapse)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"/></svg>
        </button>
        <button
          className='sidebar-title'
          onClick={() => setCollapse(!collapse)}
        >
          Channels
        </button>
        <div className='sidebar-control-icon sidebar-control-icon--plus'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
        </div>
      </div>
      <ul className={channelsListStyle}>
        {channelsElements}
      </ul>
    </div>
  )
}

export default ChannelList;