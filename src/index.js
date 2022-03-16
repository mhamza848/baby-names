import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import "./css/styles.css";

// Component
import App from './App';
import { NamesProvider } from './providers/names';
import { AppStateProvider } from './providers/app-state';

// Data
// import { names } from'./Data';

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

