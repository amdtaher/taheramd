import React, {useState, useEffect} from 'react';
import NavBar from '../Navbar/Navbar'
import Hamburger from '../Hamburger/Hamburger'

const NavigationBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1023);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? <Hamburger /> : <NavBar />}
    </>
  );
};

export default NavigationBar;