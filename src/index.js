import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, configureFakeBackend } from './_helpers/';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
