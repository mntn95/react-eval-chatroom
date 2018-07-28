/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Form from 'src/components/Form';

// Action Creators
import { changeInput, sendMessage, connectToSocket } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  message: state.message,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  onInputChange: (value) => {
    // Je dispatch une action : action INPUT_CHANGE en lui passant la value du champ
    // Action fournie par
    // - changeInput(...) => { type: CHANGE_INPUT, input: ...}

    dispatch(changeInput(value));
  },
  onSendMessage: () => {
    dispatch(sendMessage());
  },
  onConnectToSocket: () => {
    dispatch(connectToSocket());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const FormContainer = createContainer(Form);
*/

/**
 * Export
 */
export default FormContainer;
