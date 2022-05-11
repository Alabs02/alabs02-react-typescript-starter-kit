import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import reportWebVitals from 'src/reportWebVitals';

// APP
import App from 'src/app';

// APP STORE
// GLOBAL STYLES
import 'src/assets/scss/app.scss';
import 'src/styles/global.scss';

// APP ROOT
const root = document.getElementById('root') as HTMLElement;

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

const isDev = process.env.NODE_ENV === 'development';
if (isDev) reportWebVitals(console.log);
