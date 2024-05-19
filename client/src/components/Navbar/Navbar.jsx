import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Pfad zum ausgeschnittenen Logo

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <span className="logo-text">FabCollab</span>
        <img src={logo} alt="FabCollab Logo" className="logo-image" />
      </div>
      <nav>
        <Link to="/sub">Sub</Link>
        <Link to="/forum">Forum</Link>
      </nav>
      <div className="user-icon">👤</div>
    </header>
  );
};

export default Navbar;