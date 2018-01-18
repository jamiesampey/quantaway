import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from 'react-hot-loader'
import App from './App';

ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'))
  });
}