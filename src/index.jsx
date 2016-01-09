import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import 'purecss/build/pure.css';
import './css/stylesheet.css';

let store = configureStore();

ReactDOM.render((
  <Root store={store} />
), document.getElementById('app'));
