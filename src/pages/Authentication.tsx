import React, { useState } from 'react';
import { useAuthenticate, useGetUsers } from '../reducers/users/hooks';
import { Backdrop, CircularProgress, TextField, Button, Typography } from '@material-ui/core';

const Authentication: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useGetUsers();
  const { authenticated, authenticate, errorMessage, loading } = useAuthenticate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    authenticate(username, password);
  };
  if (authenticated) {
    return <div>{children}</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Backdrop open={!!loading}>
        <CircularProgress />
      </Backdrop>
      <TextField
        type="text"
        label="Username"
        fullWidth
        value={username}
        onChange={e => setUsername(e.target.value)}
        disabled={!!loading}
        required
      />

      <TextField
        type="password"
        label="Password"
        fullWidth
        value={password}
        onChange={e => setPassword(e.target.value)}
        disabled={!!loading}
        required
      />

      <Button type="submit">Login</Button>

      {errorMessage && (
        <Typography variant="h5" color="error">
          {errorMessage}
        </Typography>
      )}
    </form>
  );
};

export default Authentication;
