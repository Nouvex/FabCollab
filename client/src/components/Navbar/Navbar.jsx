import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">FabCollab</div>
      <nav>
        <Link to="/">Start</Link>
        <Link to="/forum">Forum</Link>
      </nav>
      <div className="user-icon">👤</div>
    </header>
  );
};

export default Navbar;