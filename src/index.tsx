// index.tsx or your entry file
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}
