import '../public/bootstrap-slate.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'
import App from './App';

const RoutedApp = () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(<AppContainer><RoutedApp/></AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<AppContainer><RoutedApp/></AppContainer>, document.getElementById('root'))
  });
}