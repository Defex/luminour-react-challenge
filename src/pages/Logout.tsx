import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useLogout } from '../reducers/me/hooks';

const Logout = () => {
  useLogout();
  return <CircularProgress />;
};

export default Logout;
