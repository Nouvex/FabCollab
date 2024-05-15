import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import Forum from './pages/Forum/Forum';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
