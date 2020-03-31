import React from 'react';
import './SidebarSelf.css';

function SidebarSelf() {
  return (
    <div className="sidebar-self">
      <div className="sidebar-self__info">
        <div className="sidebar-self__group">
          Workgroup
          <svg className="sidebar-self__arrow-icon" viewBox="0 0 24 24" ><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>
        </div>
        <div className="sidebar-self__name"><div className="sidebar-self__connection sidebar-self__connection--online"></div> username</div>
      </div>
      <div className="sidebar-self__createMessage">
        <svg className="sidebar-self__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"/></svg>
      </div>
    </div>
  );
}

export default SidebarSelf;