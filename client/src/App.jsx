import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import Forum from './pages/Forum/Forum';

function App() {
  console.log("Rendering App");
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/sub" element={<SubPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;