import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop-roulette-privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
}

export default App;
