// Libraries.

import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormController from '../../hooks/useFormController';

// Dependencies.

import Input from '../Input';
import { actions as languageActions } from '../../reducers/language';
import strings from './strings.json';

// Public.

const LanguageSelector = () => {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const [formState, handleChange] = useFormController(() => ({
    code: language.code,
  }));

  const currentStrings = strings[language.code] ?? strings.en;

  const options = useMemo(
    () =>
      Object.entries(language.supportedLanguages).map(([value, name]) => ({
        name,
        value,
      })),
    [language.supportedLanguages]
  );

  useEffect(() => {
    if (formState.code === language.code) return;

    dispatch(languageActions.update(formState.code));
  }, [dispatch, formState.code, language.code]);

  return (
    <Input
      label={currentStrings.label}
      name="code"
      onChange={handleChange}
      value={formState.code}
      variant="select"
      options={options}
    />
  );
};

export default LanguageSelector;
