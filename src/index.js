import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-4hyxs0p4ru53x08h.us.auth0.com"
    clientId="BIdSgZ7TkJ83ti7qgPNNDV3iE2TTfNGY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
);

