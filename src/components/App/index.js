// Libraries.

import { Provider as ReduxProvider } from 'react-redux';

// Dependencies.

import LoginForm from '../LoginForm';
import store from '../../store';
import LanguageSelector from '../LanguageSelector';

// Public.

const App = () => {
  return (
    <ReduxProvider store={store}>
      <nav>
        <LanguageSelector />
      </nav>
      <main>
        <LoginForm />
      </main>
    </ReduxProvider>
  );
};

export default App;
