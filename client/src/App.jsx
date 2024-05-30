import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import Forum from './pages/Forum/Forum';
import SubPage from './pages/SubPage/SubPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserName('');
    } else {
      setIsLoggedIn(true);
      setUserName('Pelikan256');
    }
  };

  console.log("Rendering App");
  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn} userName={userName} onLoginClick={handleLoginClick}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/sub" element={<SubPage isLoggedIn={isLoggedIn}/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;