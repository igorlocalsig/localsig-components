import React from 'react';
import Button from '../atoms/Button'; 

const Navbar: React.FC = () => {
  const handleHomeClick = () => {
    console.log('Home clicked');
  };

  const handleAboutClick = () => {
    console.log('About clicked');
  };

  return (
    <nav style={styles.navbar}>
      <Button label="Home" onClick={handleHomeClick} />
      <Button label="About" onClick={handleAboutClick} />
      <Button label="Contact" onClick={() => console.log('Contact clicked')} />
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
  },
};

export default Navbar;
