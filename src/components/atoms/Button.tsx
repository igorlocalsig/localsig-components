import React from 'react';
import { Button as MUIButton } from '@mui/material';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <MUIButton
      onClick={onClick}
      sx={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#0056b3',
        },
      }}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
