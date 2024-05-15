import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <div className="logo">FabCollab</div>
        <nav>
          <Link to="/">Start</Link>
          <Link to="/forum">Forum</Link>
        </nav>
        <div className="user-icon">👤</div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;