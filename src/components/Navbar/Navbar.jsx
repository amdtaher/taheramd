import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';
import '../../assets/css/style.css';
import logo from '../../assets/img/logo.png';
import cv from '../../assets/img/Taher_Ahmed.pdf';

const NavBar = () => {
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

  return (
    <>
      {/* Navigation Bar Section */}
      <div className="container mx-auto my-5">
        <div 
        className={`grid grid-cols-12 px-5 justify-between items-center 
        ${scrollPosition > 0 ? 'fixed-navbar' : ''}`}>
          {/* Logo */}
          <div className="w-16 col-span-12 md:col-span-4 mx-auto md:mx-0">
            <NavLink to='/' className='!p-0 !bg-transparent'><img src={logo} alt="logo"/></NavLink>
          </div>
          {/* Navigation Bar */}
          <div className="col-span-12 md:col-span-8 text-left text-lg font-semibold flex flex-row justify-end items-center gap-5 capitalize relative">
            <NavLink to='/projects' className="relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-primary before:scale-0 before:duration-300 hover:before:scale-100" activeClassName="activeBurger">my projects</NavLink>
            <NavLink to='/contact' className="relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-primary before:scale-0 before:duration-300 hover:before:scale-100">contact</NavLink>
            <a className="btn !py-1.5 relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:absolute before:bottom-0 before:left-0 before:bg-primary before:scale-0 before:duration-300 hover:before:scale-100" download='Taher_Ahmed' href={cv}>cV</a>
          </div>

          {/* To The Top Button */}
          <Link  
            onClick={scrollToTop}
            style={{ display: scrollPosition > 500 ? 'block' : 'none'}}
            className={`fixed bottom-4 right-4 bg-secondary text-white border-2 border-white rounded-full cursor-pointer p-4`}>
            <FaArrowUp size={20}/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar
