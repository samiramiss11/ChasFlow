import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { store } from '@/lib/store'
import { Provider } from 'react-redux'
import AuthProvider from './lib/AuthProvider.js'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
        <ToastContainer position='top-center' />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
)
