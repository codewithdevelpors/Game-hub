import React, { useState } from 'react';
import './Header.css';
import { IoLogoApple, IoClose, IoMenu } from 'react-icons/io5';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <div className="header">
      <IoLogoApple size={30} className="icon" />
      <h2 className="title">App Title</h2>
      <div className="links">
        <a href="#" className="link">Categories</a>
      </div>
      <input type="search" placeholder="Search..." className="search" />
      <button onClick={toggleMenu}>
        {menuOpen ? <IoClose size={30} className="icon" /> : <IoMenu size={30} className="icon" />}
      
      </button>
    </div>
  );
};

export default Header;