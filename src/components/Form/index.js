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
  }

  componentDidMount() {
    const { onConnectToSocket } = this.props;
    onConnectToSocket();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { onSendMessage } = this.props;
    onSendMessage();
  }

  handleChange = (evt) => {
    const { onInputChange } = this.props;
    const { value } = evt.target;
    onInputChange(value);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="form">
        <form action="" autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholder="Votre message"
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
