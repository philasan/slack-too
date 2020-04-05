import React, { useCallback, useState, useEffect, useRef } from 'react';
import './SearchModal.css';

function SearchModal({ toggleSearch, users }) {
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef(null);
  const searchDialogRef = useRef(null);
  const filteredUsers = users.filter(
    ({ username }) => username.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onClickCallback = useCallback(
    (event) => {
      if (!searchDialogRef.current.contains(event.target)) {
        toggleSearch();
      }
    },
    [toggleSearch, searchDialogRef]
  );

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      toggleSearch();
    }
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

  // search modal constantly steals focus
  useEffect(() => {
    searchInputRef.current.focus();
  });

  useEffect(
    () => {
      document.addEventListener('click', onClickCallback);
      return () => document.removeEventListener('click', onClickCallback);
    },
    [onClickCallback]
  );

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const searchResults = filteredUsers.map((user) => {
    return (
      <div className="search-modal__result-item" key={user.id}>
        <img className="search-modal__result-image" src={user.avatar} alt="user avatar" />
        <div className="search-modal__result-name">{user.username}</div>
        <div className="search-modal__result-text">{user.email}</div>
      </div>
    )
  });

  return (
    <div className="search-modal" onKeyDown={onKeyDown}>
      <div className="search-modal__dialog" ref={searchDialogRef}>
        <form className="search-modal__form">
          <svg className="search-modal__icon search-modal__icon--search" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          <input
            className="search-modal__input"
            placeholder="Search..."
            type="text"
            ref={searchInputRef}
            value={searchValue}
            onBlur={() => searchInputRef.current.focus()} // prevent losing focus while modal is up
            onChange={handleSearchInput} />
          <button
            className="search-modal__button search-modal__button--close"
            onClick={toggleSearch}
          >
            <svg className="search-modal__icon search-modal__icon--close" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
          </button>
        </form>
        <div className="search-modal__results">
          {searchResults}
        </div>
      </div>

    </div>
  )

}

export default SearchModal;