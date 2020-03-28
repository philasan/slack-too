import React from 'react';
import moment from 'moment';
import './ChannelMessage.css';

function ChannelMessage({ user, message, createdAt, shouldShowUser=false }) {

  const timestamp = moment(createdAt);
  let userImg = user.userImage || (<svg className="channel-message-user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>)

  if (shouldShowUser) {
      return (
        <div className="channel-message">
          <div className="channel-message__gutter">
            <div className="channel-message__userImg">{userImg}</div>
          </div>
          <div className="channel-message__content">
            <div className="channel-message__header">
              <span className="channel-message__username">{user.username}</span>
              <span className="channel-message__timestamp">
                {timestamp.format('h:mm')}<span className="channel-message__ampm">&nbsp;{timestamp.format("A")}</span>
              </span>
            </div>
            <div className="channel-message__text">{message}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="channel-message channel-message--continued">
        <div className="channel-message__gutter">
          <span className="channel-message__timestamp channel-message__timestamp--onHover">{timestamp.format('h:mm')}</span>
        </div>
        <div className="channel-message__content">
          <div className="channel-message__text">{message}</div>
        </div>
      </div>
    );
}

export default ChannelMessage;