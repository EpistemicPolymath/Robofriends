import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css'; // Main CSS
import App from './Containers/App.js'; // App Component - Parent Node
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';
 // If no extension, it assumes it is .js

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
            <Provider store={store}>
              <App  />
            </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
