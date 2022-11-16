// Libraries.

import { useId } from 'react';

// Public.

const InputText = ({ id: givenId, label, labelProps = {}, ...otherProps }) => {
  const generatedId = useId('input-text-');
  const id = givenId || generatedId;

  return (
    <div>
      <label htmlFor={id} {...labelProps}>
        {label}
        <input id={id} {...otherProps} />
      </label>
    </div>
  );
};

export default InputText;
