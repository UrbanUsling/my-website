import React from 'react';
import Presentkort from './Presentkort';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

root.render(
    <>
      <h1>Här läggs texten på</h1>
      <Presentkort />
    </>,
  );
