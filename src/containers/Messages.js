/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Messages from 'src/components/Messages';

// Action Creators
import { doSomething } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  user: state.user,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const MessagesContainer = createContainer(Messages);
*/

/**
 * Export
 */
export default MessagesContainer;
