/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */
// Style
import './messages.sass';

/**
 * Code
 */
class Messages extends React.Component {
  static defaultProps = {
    userId: '',
  };

  // A chaque message
  componentDidUpdate() {
    // la fenetre de message scroll automatiquement vers sa cible (le bas de la fenetre)
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.bottom.scrollIntoView();
  }

  render() {
    const { messages, userId } = this.props;

    return (
      <div className="messages">
        <ul className="message">
          {messages.map((message) => {
            // J'utilise classNames pour identifier l'expediteur de chaque message
            // pour ensuite l'aligner en fonction
            const userAlign = classNames(
              {
                'message-group-self': userId !== message.userId,
                'message-group-other': userId === message.userId,
              },
            );
            return (
              <li
                key={message.id}
                className={userAlign}
              >
                <p className="message-user">{message.user}</p>
                <p className="message-content">{message.message}</p>
              </li>
            );
          })}
        </ul>
        {/* div invisible utilisée pour le scrollIntoView() */}
        <div
          ref={(element) => {
            this.bottom = element;
          }}
        />
      </div>
    );
  }
}

Messages.propTypes = {
  userId: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default Messages;
