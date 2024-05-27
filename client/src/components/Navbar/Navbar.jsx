import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ isLoggedIn, userName, onLoginClick }) => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <span className="logo-text">FabCollab</span>
        <img src={logo} alt="FabCollab Logo" className="logo-image" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/forum">Forum</Link>
      </nav>
      <div className="user-container" onClick={onLoginClick}>
        {isLoggedIn ? <span className="user-greeting">Hallo {userName}!</span> : null}
        <div className="user-icon">👤</div>
      </div>
    </header>
  );
};

export default Navbar;
