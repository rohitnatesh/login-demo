// Libraries.

import { useId } from 'react';

// Public.

const InputSelect = ({
  id: givenId,
  value,
  label,
  labelProps = {},
  onChange: handleChange,
  options,
  ...otherProps
}) => {
  const generatedId = useId('input-select-');
  const id = givenId || generatedId;

  return (
    <div>
      <label htmlFor={id} {...labelProps}>
        {label}
      </label>
      <select value={value} onChange={handleChange} id={id} {...otherProps}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
