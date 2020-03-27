import React, { useState } from 'react';
import './ChannelInput.css';

function ChannelInput({ channelName }) {
  const [message, setMessage] = useState('');

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
        placeholder={`Message ${channelName}`}
        value={message}
        onChange={handleMessage}
      />
    </form>
    <div className="channel-input__tips"><strong>Return</strong> to send</div>
    </>
  );
}

export default ChannelInput;
