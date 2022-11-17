// Libraries.

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Dependencies.

import { actions } from '../../reducers/auth';

// Private.

const statusApiPromise = fetch('/api/auth/status', { method: 'GET' });

// Public.

const Initializer = ({ children, loadingFallback = 'Loading...' }) => {
  const dispatch = useDispatch();
  const statusFetched = useSelector((state) => state.auth.statusFetched);

  useEffect(() => {
    const fn = async () => {
      const response = await statusApiPromise;
      const status = await response.json();
      dispatch(actions.status(status));
    };

    fn();
  }, [dispatch]);

  return statusFetched ? children : loadingFallback;
};

export default Initializer;
