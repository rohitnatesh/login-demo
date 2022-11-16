// Libraries.

import { useDispatch, useSelector } from 'react-redux';

// Dependencies.

import useFormController from '../../hooks/useFormController';
import { loginThunk } from '../../reducers/auth';
import Input from '../Input';
import strings from './strings.json';

// Public.

const LoginForm = ({}) => {
  const language = useSelector((state) => state.language);
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

  return (
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
  );
};

export default LoginForm;
