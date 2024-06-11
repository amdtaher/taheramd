import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../../assets/css/style.css';
import resume from "../../assets/img/Taher-Ahmed.pdf"

const SideBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to Top button
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#2a2a2a',
      padding: '2.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    bmItem: {
      padding: '13px 10px',
      color: '#fff',
      transition: '0.3s',
    },
    bmItemActive: {
      color: 'white',
      backgroundColor: '#000',
    },
  }

  return (
    <>
      <div className='container p-0'>   
        <Menu styles={styles} className="text-lg font-semibold">
          <NavLink to='/' className="hover:bg-primary hover:rounded-sm" activeClassName="bmItemActive">Home</NavLink>
          <NavLink to='/projects' className="hover:bg-primary hover:rounded-sm">Projects</NavLink>
          <NavLink to='/contact' className="hover:bg-primary hover:rounded-sm">Contact</NavLink>
          <a className="btn !py-3 capitalize cursor-pointer hover:bg-primary" download='Taher_Ahmed' href={resume}>resume</a>
        </Menu>
        {/* To The Top Button */}
        <Link  
        onClick={scrollToTop}
        style={{ display: scrollPosition > 500 ? 'block' : 'none', zIndex: 100}}
        className={`fixed bottom-4 right-4 bg-secondary text-white border-2 border-white rounded-full cursor-pointer p-4`}>
          <FaArrowUp size={20}/>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
