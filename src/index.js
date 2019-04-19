import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Main CSS
import App from './Containers/App.js'; // App Component - Parent Node
import * as serviceWorker from './serviceWorker';
import 'tachyons';
 // If no extension, it assumes it is .js


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
