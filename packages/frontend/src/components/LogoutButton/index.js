// Libraries.

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Dependencies.

import { logoutThunk } from '../../reducers/auth';

// Public.

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(logoutThunk());
  }, [dispatch]);

  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
};

export default LogoutButton;
