import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavComp from './components/Nav/NavComp';
import SignupComp from './components/SignupComp/SignupComp';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Mission from './pages/Mission';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={SignupComp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
