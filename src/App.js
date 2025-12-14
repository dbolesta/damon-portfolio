import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop-roulette-privacy-policy" component={PrivacyPolicy} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
