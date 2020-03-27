import React, { useState, useEffect, useRef } from 'react';
import './ChannelInput.css';

function ChannelInput({ channelName }) {
  const [message, setMessage] = useState('');
  const [hasFocus, setHasFocus] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    function keyDownTakeFocus(event) {
      if (!hasFocus) {
        inputEl.current.focus();
      }
    }

    document.addEventListener('keydown', keyDownTakeFocus);

    return () => {
      document.removeEventListener("keydown", keyDownTakeFocus);
    }
  });

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(message);
    setMessage('');
    e.preventDefault();
  }

  return (
    <>
    <form className="channel-input" onSubmit={handleSubmit}>
      <input
        className="channel-input__input"
        onBlur={() => setHasFocus(false)}
        onChange={handleMessage}
        onFocus={() => setHasFocus(true)}
        placeholder={`Message ${channelName}`}
        ref={inputEl}
        value={message}
      />
    </form>
    <div className="channel-input__tips"><strong>Return</strong> to send</div>
    </>
  );
}

export default ChannelInput;
