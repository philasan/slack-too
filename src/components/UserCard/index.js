import React from 'react';
import moment from 'moment';
import './UserCard.css';
import classNames from 'classnames';

function UserCard({ userId, user }) {
  return (
    <div className='user-card'>
      <img className="user-card__image" src={user.avatar} alt="user"/>
      <div className="user-card__name">
        {user.username}
        <div className="user-card__status user-card__status--online"></div>
      </div>
      <div className="user-card__localtime">
        Local time<br/>
        <span className="user-card__time">{moment().format('h:mm A')}</span>
      </div>
      <div className="user-card__contact-buttons">
        <button className="user-card__button user-card__message-user">Message</button>
        <button className="user-card__button user-card__call-user">Call</button>
      </div>
    </div>
  );
}

export default UserCard;