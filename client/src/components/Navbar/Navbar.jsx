import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ isLoggedIn, userName, onLoginClick }) => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <span className="logo-text">FabCollab</span>
          <img src={logo} alt="FabCollab Logo" className="logo-image" />
        </Link>
      </div>
      <nav>
        <Link to="/">Start</Link>
        <Link to="/forum">Forum</Link>
      </nav>
      <div className="user-container">
        {isLoggedIn && <span className="user-greeting">Hallo {userName}!</span>}
        <div className="user-icon" onClick={onLoginClick}>👤</div>
      </div>
    </header>
  );
};

export default Navbar;
