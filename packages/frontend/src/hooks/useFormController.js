// Libraries.

import { useState } from 'react';

// Public.

const useFormController = (initialState, onChange) => {
  const [formValue, setFormValue] = useState(initialState);

  const handleChange = (event) => {
    const skipDefaultHandler =
      onChange?.(event, formValue, setFormValue) === false;
    if (skipDefaultHandler) return;

    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return [formValue, handleChange];
};

export default useFormController;
