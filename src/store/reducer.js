/**
 * Initial State
 */
const initialState = {
  messages: [],
  user: 'New User',
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
    case INPUT_CHANGE:
      return {
        ...state,
        message: action.message,
      };
    case CONNECT_SOCKET:
      return {
        ...state,
        message: state.message,
      };
    case MESSAGE_SEND: {
      return {
        ...state,
        message: state.message,
        user: state.user,
      };
    }
    case MESSAGE_RECEIVED: {
      const newMessEntry = {
        id: action.id,
        user: action.user,
        message: action.message,
      };
      return {
        ...state,
        messages: [...state.messages, newMessEntry],
        message: '',
      };
    }
    case USER_CHANGE:
      return {
        ...state,
        user: action.user,
      };
    // SUBMIT NOUVEAU USER
    case AUTEUR_ADD:
      console.log('user :', state.user);
      return {
        ...state,
        user: state.user,
        // currentUser: state.user,
        enterUsername: false,
      };
    // CLICK SUR LE PLUS
    case ADD_USER:
      return {
        ...state,
        enterUsername: true,
      };
    // CLICK SUR LE CANCEL
    case CANCEL_INPUT:
      console.log(action.user);
      console.log(state.user);
      return {
        ...state,
        enterUsername: false,
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
