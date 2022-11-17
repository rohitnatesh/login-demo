// Libraries.

import ReactDOM from 'react-dom/client';

// Dependencies.

import AuthenticationProvider from './components/AuthenticationProvider';
import App from './components/App';

// Public.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthenticationProvider>
    <App />
  </AuthenticationProvider>
);
