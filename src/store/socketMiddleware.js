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
      console.log('connexion au WebSocket');
      socket = window.io(); // connexion au WebSocket
      socket.on('send_message', (message) => {
        console.log('message from Connect Socket : ', message);
        store.dispatch(receiveMessage(message));
      });
      break;
    case MESSAGE_SEND:  {
      // ciblable plus finement
      const message = store.getState(action.message); // Je file une copie complète de mon state
      console.log('message from Message Add : ', message);
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
