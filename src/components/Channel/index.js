import React from 'react';
import moment from 'moment';
import ChannelMessage from '../ChannelMessage';
import ChannelInput from '../../containers/ChannelInputContainer';
import './Channel.css';

function Channel({ channel, messages, toggleSearch }) {
  const { name, topic } = channel;
  const memberCount = 1;
  let lastUser;
  let lastUserTime = 0;
  let shouldMessageShowUser = false;

  const messagesElements = [];

  for (let i = 0; i <= messages.length - 1; i++) {
    const { user, message, createdAt } = messages[i];
    const thisMoment = moment(createdAt);
    const messageDate = thisMoment.date();

    shouldMessageShowUser = false;
    if (lastUser !== user.id) {
      lastUser = user.id;
      shouldMessageShowUser = true;
    } else if (createdAt - lastUserTime >= 300000) {
      shouldMessageShowUser = true;
    }

    if (moment(lastUserTime).date() !== messageDate) {
      let label;
      const today = moment().date();
      const yesterday = moment().date() - 1;

      switch(messageDate) {
        case today:
          label = "Today";
          break;
        case yesterday:
          label = "Yesterday";
          break;
        default:
          label = thisMoment.format("dddd, MMMM Do");
          break;
      }

      messagesElements.push((
        <div key={`${user.id}-${thisMoment}`} className="channel-messages__date-divider">
          <div className="channel-messages__date-label">{label}</div>
        </div>
      ));
    }

    messagesElements.push(
      <ChannelMessage
        key={`${user.id}-${i}`}
        user={user}
        message={message}
        createdAt={createdAt}
        shouldShowUser={shouldMessageShowUser}
      />
    );

    lastUserTime = createdAt;
  }

  return (
    <div className="channel">
      <div className="channel-header">
        <div className="channel-header__info">
          <div className="channel-header__inner">
            <div className="channel-header__name">{name}</div>
            <button className="channel-header__button channel-header__button--star">
              <svg className="channel-header__icon channel-header__icon--star" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
            </button>
          </div>
          <div className="channel-header__inner">
            <div className="channel-header__members">
              <svg className="channel-header__icon channel-header__icon--members" viewBox="0 0 24 24"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              {memberCount}
            </div>
            <div className="channel-header__topic">
              <div className="channel-header__topic-inner">
                {topic}
              </div>
              <a href="#" className="channel-header__topic-edit">Edit</a>
            </div>
          </div>
        </div>
        <div className="channel-header__toolbar">
          <div className="channel-header__search" onClick={toggleSearch}>
            <svg className="channel-header__icon channel-header__icon--search" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            Search
          </div>
        </div>
        <div className="channel-header__details">
          <svg className="channel-header__icon channel-header__icon--details" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          Details
        </div>
      </div>
      <div className="channel-messages">
        {messagesElements.reverse()}
      </div>
      <ChannelInput />
    </div>
  );
}

export default Channel;