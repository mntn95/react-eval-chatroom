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
import './settings.sass';

/**
 * Code
 */
class Settings extends React.Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    onUserInputChange: PropTypes.func.isRequired,
    onUserSubmit: PropTypes.func.isRequired,
    enterUsername: PropTypes.bool.isRequired,
    onAddUser: PropTypes.func.isRequired,
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { onUserSubmit } = this.props;
    onUserSubmit();
  }

  handleChange = (evt) => {
    const { onUserInputChange } = this.props;
    const { value } = evt.target;
    onUserInputChange(value);
  }

  render() {
    const { user, enterUsername, onAddUser } = this.props;
    return (
      <div className="settings">
        <h2 className="settings-chatroom">Chatroom</h2>
        {!enterUsername && (
          <button
            type="button"
            className="settings-button"
            onClick={onAddUser}
          >+
          </button>
        )}
        {enterUsername && (
        <form className="settings-form" action="" autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            className="settings-form-input"
            type="text"
            value={user}
            onChange={this.handleChange}
          />
          <button className="settings-form-button" type="submit">OK</button>
        </form>
        )}
      </div>
    );
  }
}

/**
 * Export
 */
export default Settings;
