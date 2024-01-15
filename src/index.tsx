// index.tsx or your entry file
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Home />);
}
