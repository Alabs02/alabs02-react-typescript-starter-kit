import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

// APP
import App from './app';

// APP STORE
// GLOBAL STYLES

// APP ROOT
const root = document.getElementById('root') as HTMLElement;

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

const isDev = process.env.NODE_ENV === 'development';
if (isDev) 
  reportWebVitals(console.log);
