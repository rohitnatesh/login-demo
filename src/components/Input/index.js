// Dependencies.

import variantsMap from './variants';

// Public.

const Input = ({ variant = 'text', ...otherProps }) => {
  const Component = variantsMap.get(variant) ?? variantsMap.get('text');

  return <Component {...otherProps} />;
};

export default Input;
