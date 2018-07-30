/**
 * Npm import
 */
import { CONNECT_SOCKET, receiveMessage, MESSAGE_SEND } from './reducer';


/**
 * local import
 */


/**
 * Code
 */
let socket;
/**
 * Middleware
 */
const socketLogger = store => next => (action) => {
  switch (action.type) {
    case CONNECT_SOCKET:
      socket = window.io(); // connexion au WebSocket
      // J'ajoute un ecouteur d'évenement, ici lorsque send_message est utilisé,
      socket.on('send_message', (message) => {
        // je dispatch receiveMessage, pour recevoir la liste des messages
        store.dispatch(receiveMessage(message));
      });
      break;
    case MESSAGE_SEND: {
      const message = store.getState(action.message); // Je file une copie complète de mon state
      socket.emit('send_message', message);
    }
      break;
    default:
      break;
  }
  // Passage au voisin
  next(action);
};


/**
 * Export
 */
export default socketLogger;
