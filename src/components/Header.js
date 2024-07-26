import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGrj12rff2Aa6XA0DQwLjN1mL7XNh1S_XGw&s" alt="ipl logo" className="header-logo" />
    </Link>
    <nav className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
    </nav>
  </header>
);

export default Header;
