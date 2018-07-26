import uuidv4 from 'uuid/v4'; // https://www.npmjs.com/package/uuid


/**
 * Initial State
 */
const initialState = {
  messages: [],
  user: 'anonymous',
  status: 'none',
  message: '',
  enterUsername: false,
};

/**
 * Types
 */
const INPUT_CHANGE = 'INPUT_CHANGE';
const AUTEUR_CHANGE = 'AUTEUR_CHANGE';
const AUTEUR_ADD = 'AUTEUR_ADD';
const MESSAGE_ADD = 'MESSAGE_ADD';
const ADD_USER = 'ADD_USER';


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

    case MESSAGE_ADD: {
      const newMessEntry = {
        id: uuidv4(),
        user: state.user,
        message: state.message,
      };
      // Nouveau state
      return {
        ...state,
        messages: [...state.messages, newMessEntry],
        message: '',
      };
    }
    case AUTEUR_CHANGE:
      return {
        ...state,
        user: action.user,
      };

    case AUTEUR_ADD:
      return {
        ...state,
        user: state.user,
        enterUsername: false,
      };
    case ADD_USER:
      return {
        ...state,
        enterUsername: true,
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
  type: MESSAGE_ADD,
});

export const changeUser = value => ({
  type: AUTEUR_CHANGE,
  user: value,
});

export const addAuteur = () => ({
  type: AUTEUR_ADD,
});

export const addUser = () => ({
  type: ADD_USER,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
