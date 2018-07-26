/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Component
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

// Style
import './app.sass';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Settings />
    <Messages />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;
