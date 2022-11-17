// Dependencies.

import InputSelect from './InputSelect';
import InputText from './InputText';

// Public.

const variantsMap = new Map([
  ['select', InputSelect],
  ['text', (props) => <InputText type="text" {...props} />],
  ['email', (props) => <InputText type="email" {...props} />],
  ['password', (props) => <InputText type="password" {...props} />],
  ['number', (props) => <InputText type="number" {...props} />],
]);

export default variantsMap;
