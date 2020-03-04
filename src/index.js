// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { App } from './App';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<App />, root);
  registerServiceWorker();
}
