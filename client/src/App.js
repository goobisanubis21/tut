import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavComp from './components/Nav/NavComp';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
