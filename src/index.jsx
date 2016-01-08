import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import {Provider} from 'react-redux';

let store = configureStore();

ReactDOM.render((
  <Root store={store} />
), document.getElementById('app'));
