// Dependencies.

import Home from '../Home';
import LoginForm from '../LoginForm';
import Route from '../Route';

// Public.

const App = () => {
  const handleAuthentication = () => {
    window.location.replace('/');
  };

  return (
    <>
      <Route path="/" isSecure>
        <Home />
      </Route>
      <Route path="/login">
        <LoginForm onAuthenticate={handleAuthentication} />
      </Route>
    </>
  );
};

export default App;
