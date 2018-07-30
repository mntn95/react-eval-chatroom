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
import './form.sass';

/**
 * Code
 */
class Form extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSendMessage: PropTypes.func.isRequired,
    onConnectToSocket: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { onConnectToSocket } = this.props;
    onConnectToSocket();
  }

  handleSubmit = (evt) => {
    // J'empeche le refresh de la page au submit
    evt.preventDefault();
    const { onSendMessage } = this.props;
    onSendMessage();
  }

  handleChange = (evt) => {
    // A chaque lettre, l'input se remplit VIA le reducer
    const { onInputChange } = this.props;
    const { value } = evt.target;
    onInputChange(value);
  }

  render() {
    const { message, user } = this.props;
    return (
      <div className="form">
        <form action="" autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholder={`${user} écrit :`}
            value={message}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
export default Form;
