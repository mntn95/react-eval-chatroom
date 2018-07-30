/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import MdGroup from 'react-icons/lib/md/group';
import IoIosCloseEmpty from 'react-icons/lib/io/ios-close-empty';


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
    cancelInput: PropTypes.func.isRequired,
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { onUserSubmit } = this.props;
    onUserSubmit();
  }

  // Au click, j'empeche la mise a jour du nom de l'user, via le reducer
  handleCancel = () => {
    const { cancelInput } = this.props;
    cancelInput();
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
        <div className="settings-group">
          <MdGroup className="settings-logo" />
          <h2 className="settings-title">Fenetres Live Messenger</h2>
        </div>
        {/* bouton animé (déguisé en bouton FERMER de windows) activant le changement du
        * nom de l'utilisateur
        */}
        {!enterUsername && (
          <button
            type="button"
            className="settings-add settings-add-click"
            onClick={onAddUser}
          >
            <IoIosCloseEmpty className="settings-add-icon" />
          </button>
        )}
        {enterUsername && (
        <form className="settings-form" action="" autoComplete="off" onSubmit={this.handleSubmit}>
          {/* Bouton pour annuler la saisie */}
          <button type="button" className="settings-add settings-add-cancel" onClick={this.handleCancel}>
            <IoIosCloseEmpty className="settings-add-icon" />
          </button>
          <input
            className="settings-form-input"
            type="text"
            value={user}
            onChange={this.handleChange}
            autoFocus
          />
          {/* Bouton pour confirmer la saisie */}
          <button className="settings-add settings-add-confirm" type="submit">OK</button>
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
