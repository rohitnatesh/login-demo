// Libraries.

import { Provider as ReduxProvider } from 'react-redux';

// Dependencies.

import store from '../../store';
import Initializer from '../Initializer';

// Public.

const AuthenticationProvider = ({ children, loadingFallback }) => {
  return (
    <ReduxProvider store={store}>
      <Initializer loadingFallback={loadingFallback}>{children}</Initializer>
    </ReduxProvider>
  );
};

export default AuthenticationProvider;
