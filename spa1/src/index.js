import React from 'react';
import { createRoot } from 'react-dom/client';
import 'tachyons';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // <-- This is the new API

root.render(<App />);

