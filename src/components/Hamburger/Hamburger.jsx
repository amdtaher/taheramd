import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import '../../assets/css/style.css';

const SideBar = () => {
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
      borderRadius: '6px',
      color: '#fff',
      transition: '0.3s',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <>
      <div className="container p-0">   
        <Menu styles={ styles } className="text-lg font-semibold">
          <NavLink to='/' className="hover:bg-primary" activeClassName="active">Home</NavLink>
          <NavLink to='/projects' className="hover:bg-primary">Projects</NavLink>
          <NavLink to='/contact' className="hover:bg-primary">Contact</NavLink>
        </Menu>
      </div>
    </>
  );
};

export default SideBar;