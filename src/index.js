import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // This gives the access of the redux store to the whole application
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

