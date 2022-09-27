require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';

createRoot(document.getElementById('app')).render(<App tab="home"/>);