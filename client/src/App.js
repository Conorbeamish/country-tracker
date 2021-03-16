import Nav from "./components/Nav";
import AuthForm from "./components/AuthForm";
import React, {useState, useMemo} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from "./components/Landing";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState(null);
  // Prevent change of provider value unless user, setUser changes.
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  //TODO Rehydrate user or set to null on load


  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/signup">
            <AuthForm  buttonType="Sign Up"/>
          </Route>
          <Route exact  path="/signin" >
            <AuthForm  buttonType="Sign In"/>
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
