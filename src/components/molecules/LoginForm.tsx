import React, { useState } from 'react';
import { Button as MUIButton, TextField, Box } from '@mui/material';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        padding: 2,
        margin: 'auto',
      }}
    >
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <MUIButton type="submit" variant="contained" color="primary">
        Login
      </MUIButton>
    </Box>
  );
};

export default LoginForm;
