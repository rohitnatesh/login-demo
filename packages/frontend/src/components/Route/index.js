// Libraries.

import { useSelector } from 'react-redux';

// Public.

const Router = ({ children, path, isSecure }) => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const { pathname } = window.location;
  const isActive = path === pathname;

  if (isActive && isSecure && !isAuthorized) {
    window.location.replace('/login');
    return null;
  }

  return isActive ? children : null;
};

export default Router;
