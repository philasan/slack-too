import React, { useState } from 'react';
import './SidebarSelf.css';
import Dismissible from '../Dismissible';

function SidebarSelf() {
  const [notificationPause, setNotificationPause] = useState(false);
  const [showNotificationPauseMenu, setShowNotificationPauseMenu] = useState(false);

  const turnOffNotifications = () => {
    setNotificationPause(true);
    setShowNotificationPauseMenu(false);
  };

  const turnOnNotifications = () => {
    setNotificationPause(false);
    setShowNotificationPauseMenu(false);
  };

  const notificationsIconOn = (
    <svg className="sidebar-self__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.29 17.29L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM16 17H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"/></svg>
  );
  const notificationsIconPaused = (
    <svg className="sidebar-self__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.5 9.8h2.8l-2.8 3.4V15h5v-1.8h-2.8l2.8-3.4V8h-5zM18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/></svg>
  );
  let notificationsIcon = notificationPause ? notificationsIconPaused : notificationsIconOn;
  let notificationsPauseMenu;

  const notificationsMenuSelectDuration = (
    <Dismissible
      className="sidebar-self__notifications-menu"
      dismiss={() => setShowNotificationPauseMenu(false)}
    >
      <div className="sidebar-self__menu-title">Pause Notifications</div>
      <ul className="sidebar-self__notifications-options">
        <li className="sidebar-self__notifications-option" onClick={turnOffNotifications}>30 minutes</li>
        <li className="sidebar-self__notifications-option" onClick={turnOffNotifications}>1 hour</li>
        <li className="sidebar-self__notifications-option" onClick={turnOffNotifications}>2 hours</li>
        <li className="sidebar-self__notifications-option" onClick={turnOffNotifications}>4 hours</li>
        <li className="sidebar-self__notifications-option" onClick={turnOffNotifications}>Until tomorrow</li>
        <li className="sidebar-self__notifications-option" onClick={turnOffNotifications}>Until next week</li>
      </ul>
      <hr className="sidebar-self__hr" />
      <div className="sidebar-self__notifications-option" onClick={turnOffNotifications}>Do Not Disturb...</div>
    </Dismissible>
  );

  const notificationsMenuResume = (
    <Dismissible
      className="sidebar-self__notifications-menu"
      dismiss={() => setShowNotificationPauseMenu(false)}
    >
      <div className="sidebar-self__menu-title">Notifications are Paused</div>
      <ul className="sidebar-self__notifications-options">
        <li
          className="sidebar-self__notifications-option"
          onClick={turnOnNotifications}
        >Resume notifications</li>
      </ul>
    </Dismissible>
  );

  if (showNotificationPauseMenu) {
    notificationsPauseMenu = (notificationPause) ? notificationsMenuResume : notificationsMenuSelectDuration;
  }

  return (
    <div className="sidebar-self">
      <div className="sidebar-self__info">
        <div className="sidebar-self__group">
          Workgroup
        </div>
        <div className="sidebar-self__name"><div className="sidebar-self__connection sidebar-self__connection--online"></div> username</div>
      </div>
      <button
        className="sidebar-self__notifications-button"
        onClick={() => setShowNotificationPauseMenu(!showNotificationPauseMenu)}
      >
        {notificationsIcon}
      </button>
      {notificationsPauseMenu}
    </div>
  );
}

export default SidebarSelf;
