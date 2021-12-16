import 'reflect-metadata';
import { StylesProvider } from '@mui/styles';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

ReactDOM.render(
  <StylesProvider injectFirst>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </StylesProvider>,
  document.getElementById('root'),
);
