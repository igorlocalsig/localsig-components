import React from 'react';
import Button from './Button';
import Input from './Input'; 

interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Atoms: React.FC = () => {
  return (
    <div>
      <h3>Atoms</h3>
      <div>
        <h4>Button</h4>
        <Button 
          label="Click Me" 
          onClick={() => alert('Button Clicked!')} 
        />
      </div>
      <div>
        <h4>Input</h4>
        <Input 
          label="Type something..." 
          type="text" 
          value="" 
          onChange={() => {}} 
        />
      </div>
    </div>
  );
};

export default Atoms;
