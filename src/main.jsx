import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind styles
import './firebaseConfig'; // <--- ensures Firebase is initialized

const container = document.getElementById('root');
if (!container) throw new Error('No #root element found in index.html');

const root = createRoot(container);
root.render(<App />);
