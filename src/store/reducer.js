import uuidv4 from 'uuid/v4';
/**
 * Initial State
 */
const initialState = {
  messages: [],
  user: 'kéké-du-59',
  lastUser: 'kéké-du-59',
  changingUser: 'kéké-du-59',
  message: '',
  enterUsername: false,
};

/**
 * Types
 */
const INPUT_CHANGE = 'INPUT_CHANGE';
const USER_CHANGE = 'USER_CHANGE';
const AUTEUR_ADD = 'AUTEUR_ADD';
export const MESSAGE_SEND = 'MESSAGE_SEND';
const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
const ADD_USER = 'ADD_USER';
export const CONNECT_SOCKET = 'CONNECT_SOCKET';
const CANCEL_INPUT = 'CANCEL_INPUT';


/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Lorsqu'on ajoute une lettre au form de messages
    case INPUT_CHANGE:
      return {
        ...state,
        message: action.message,
      };
    // Lorsqu'on se connecte au websocket
    case CONNECT_SOCKET:
      return {
        ...state,
        userId: uuidv4(),
      };
    // Lorsqu'on submit un message
    case MESSAGE_SEND:
      return {
        ...state,
        message: state.message,
        user: state.user,
      };
    // Lorsqu'on reçoit un message depuis le websocket
    case MESSAGE_RECEIVED: {
      const newMessage = {
        id: action.id,
        userId: action.userId,
        user: action.user,
        message: action.message,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        message: '',
      };
    }
    // Lorsqu'on ajoute une lettre a l'input de changement de pseudo
    case USER_CHANGE:
      return {
        ...state,
        changingUser: action.user,
      };
    // Lorsqu'on submit un nouveau pseudo
    case AUTEUR_ADD:
      return {
        ...state,
        lastUser: state.changingUser,
        user: state.changingUser,
        enterUsername: false,
      };
    // Lorsqu'on click sur le bouton pour changer de pseudo
    case ADD_USER:
      return {
        ...state,
        enterUsername: true,
      };
    // Lorsqu'on click sur le bouton pour annuler la saisie de pseudo
    case CANCEL_INPUT:
      return {
        ...state,
        enterUsername: false,
        user: state.lastUser,
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeInput = value => ({
  type: INPUT_CHANGE,
  message: value,
});

export const sendMessage = () => ({
  type: MESSAGE_SEND,
});

export const changeUser = value => ({
  type: USER_CHANGE,
  user: value,
});

export const addAuteur = () => ({
  type: AUTEUR_ADD,
});

export const addUser = () => ({
  type: ADD_USER,
});

export const receiveMessage = value => ({
  type: MESSAGE_RECEIVED,
  message: value.message,
  user: value.user,
  id: value.id,
  userId: value.userId,
});
export const connectToSocket = () => ({
  type: CONNECT_SOCKET,
});

export const cancelInput = () => ({
  type: CANCEL_INPUT,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
