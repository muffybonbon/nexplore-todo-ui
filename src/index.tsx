import React from 'react';
import ReactDOMClient from 'react-dom/client';

import App from './containers/App';

/* Get the root element from the HTML file */
const domNode = document.getElementById('root')!;

/* Create root */
const root = ReactDOMClient.createRoot(domNode);

root.render(<App />);
