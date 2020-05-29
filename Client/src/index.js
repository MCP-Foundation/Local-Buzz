import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#3cc',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

ReactDOM.render(
  <Grommet theme={theme}>
    <App />
  </Grommet>,
  document.getElementById('root')
);

serviceWorker.unregister();
