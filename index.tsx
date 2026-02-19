
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ReactLenis } from '@studio-freight/react-lenis';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
