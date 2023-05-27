import React from 'react';
import ReactDOM from 'react-dom/client';

import { NormalizeProvider } from './app/providers/normalize-provider';
import { Router } from './app/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NormalizeProvider>
      <Router />
    </NormalizeProvider>
  </React.StrictMode>
);
