/* eslint-disable import/no-import-module-exports */
/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable unicorn/prefer-module */
import 'assets/styles/style.scss';

import { createRoot, hydrateRoot } from 'react-dom/client';
import Loadable from 'react-loadable';
import App from './app';

Loadable.preloadReady().then(() =>
  module.hot
    ? createRoot(document.querySelector('#root') as Element).render(<App />)
    : hydrateRoot(document.querySelector('#root') as Element, <App />),
);
