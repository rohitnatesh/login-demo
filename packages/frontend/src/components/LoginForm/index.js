// Libraries.

import { useDispatch, useSelector } from 'react-redux';

// Dependencies.

import useFormController from '../../hooks/useFormController';
import { loginThunk } from '../../reducers/auth';
import Input from '../Input';
import strings from './strings.json';
import LanguageSelector from '../LanguageSelector';

// Public.

const LoginForm = ({ onAuthenticate }) => {
  const language = useSelector((state) => state.language);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();

  const currentStrings = strings[language.code] ?? strings.en;

  const [formValue, handleChange] = useFormController({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formValue));
  };

  if (isAuthorized) {
    onAuthenticate?.();
    return <div>Already authenticated!</div>;
  }

  return (
    <section>
      <nav>
        <LanguageSelector />
      </nav>
      <main>
        <form>
          <Input
            label={currentStrings.emailLabel}
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
          <Input
            label={currentStrings.passwordLabel}
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            {currentStrings.submit}
          </button>
        </form>
      </main>
    </section>
  );
};

export default LoginForm;
