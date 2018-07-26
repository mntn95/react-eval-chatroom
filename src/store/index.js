/*
 * Npm import
 */
import { createStore } from 'redux';
// , applyMiddleware, compose
/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';
// import ajaxMiddleware from 'src/store/ajaxMiddleware';

/*
 * Code
 */
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// const appliedMiddleware = applyMiddleware(ajaxMiddleware);
// const enhancers = compose(appliedMiddleware, ...devTools);

// createStore
const store = createStore(reducer, ...devTools);
// , enhancers
/*
 * Export
 */
export default store;
