import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App.jsx';
import {Provider} from 'react-redux';
let store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
