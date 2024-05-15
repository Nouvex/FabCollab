import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  console.log("Rendering Layout");
  return (
    <div className="layout">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;