// Libraries.

import { useDispatch, useSelector } from 'react-redux';

// Dependencies.

import { useState } from 'react';
import useFormController from '../../hooks/useFormController';
import { loginThunk } from '../../reducers/auth';
import Input from '../Input';
import strings from './strings.json';
import LanguageSelector from '../LanguageSelector';
import { getIsEmailValid } from '../../utilities/email';

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

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmailValid = getIsEmailValid(formValue.email);
    const isPasswordValid = Boolean(formValue.password.length);

    if (isEmailValid && isPasswordValid) {
      setErrors({});
      dispatch(loginThunk(formValue));
      return;
    }

    const errorsState = {};

    if (!isEmailValid) {
      errorsState.email = true;
    }

    if (!isPasswordValid) {
      errorsState.password = true;
    }

    setErrors(errorsState);
  };

  if (isAuthorized) {
    onAuthenticate?.();
    return null;
  }

  return (
    <section>
      <nav>
        <LanguageSelector />
      </nav>
      <main>
        <form>
          <Input
            label={
              currentStrings[errors.email ? 'emailErrorLabel' : 'emailLabel']
            }
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
          <Input
            label={
              currentStrings[
                errors.password ? 'passwordErrorLabel' : 'passwordLabel'
              ]
            }
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
