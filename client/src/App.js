import Nav from "./components/Nav";
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Landing/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
