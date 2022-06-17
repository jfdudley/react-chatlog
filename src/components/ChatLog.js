import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((message) => {
    return (
      <li key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onUpdate={props.onUpdateMessage}
        />
      </li>
    );
  });
  return <ul>{chatComponents}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onUpdateMessage: PropTypes.func.isRequired,
};

export default ChatLog;
