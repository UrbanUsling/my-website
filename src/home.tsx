// index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import ImageLoop from './ImageLoop';

const rootContainer = document.getElementById('home');

if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(<ImageLoop />);
} else {
  console.error('Root container not found or not a valid DOM element');
}
