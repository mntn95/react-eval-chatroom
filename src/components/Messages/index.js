/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components

// Style
import './messages.sass';

/**
 * Code
 */
const Messages = ({ messages }) => (
  <div className="messages">
    <ul className="message">
      {messages.map(message => (
        <li key={message.id} className="message-group">
          <p className="message-user">{message.user}</p>
          <p className="message-content">{message.message}</p>
        </li>
      ))}
    </ul>
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default Messages;
